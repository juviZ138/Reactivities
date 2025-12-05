import { Password } from "@mui/icons-material";
import {
  changePassWordSchema,
  type ChangePassWordSchema,
} from "../../lib/schemas/changePasswordSchema";
import AccountFormWarpper from "./AccountFormWrapper";
import { zodResolver } from "@hookform/resolvers/zod";
import TextInput from "../../app/shared/components/TextInput";
import { useAccount } from "../../lib/hooks/useAccount";
import { toast } from "react-toastify";

export default function ChangePasswordForm() {
  const { changePassword } = useAccount();
  const onSubmit = async (data: ChangePassWordSchema) => {
    try {
      await changePassword.mutateAsync(data, {
        onSuccess: () => toast.success("Your password has been changed"),
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AccountFormWarpper<ChangePassWordSchema>
      title="Change password"
      icon={<Password fontSize="large" />}
      onSubmit={onSubmit}
      submitButtonText="Update password"
      resolver={zodResolver(changePassWordSchema)}
      reset={true}
    >
      <TextInput
        type="password"
        label="Current password"
        name="currentPassword"
      ></TextInput>
      <TextInput
        type="password"
        label="New password"
        name="newPassword"
      ></TextInput>
      <TextInput
        type="password"
        label="Confirm password"
        name="confirmPassword"
      ></TextInput>
    </AccountFormWarpper>
  );
}
