import {
  Box,
  Tabs,
  Tab,
  Typography,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid2,
} from "@mui/material";
import { Link, useParams } from "react-router";
import { useProfile } from "../../lib/hooks/useProfile";
import { useEffect, useState, type SyntheticEvent } from "react";
import { format } from "date-fns";

export default function ProfileActivities() {
  const { id } = useParams();
  const { setFilter, userActivities, loadingUserActivities } = useProfile(id);

  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { menuItem: "Future Events", key: "future" },
    { menuItem: "Past Events", key: "past" },
    { menuItem: "Hosting", key: "hosting" },
  ];

  useEffect(() => {
    setFilter("future");
  }, [setFilter]);

  const handleChange = (_: SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
    setFilter(tabs[newValue].key);
  };

  return (
    <Box>
      <Grid2 container spacing={2}>
        <Grid2 size={12}>
          <Tabs value={activeTab} onChange={handleChange}>
            {tabs.map((tab, index) => (
              <Tab key={index} label={tab.menuItem}></Tab>
            ))}
          </Tabs>
        </Grid2>
      </Grid2>
      {(!userActivities || userActivities.length === 0) &&
      !loadingUserActivities ? (
        <Typography mt={2}>No activities to show</Typography>
      ) : null}
      <Grid2
        container
        spacing={2}
        sx={{ margin: 2, height: 400, overflow: "auto" }}
      >
        {userActivities &&
          userActivities.map((activity: Activity) => (
            <Link
              to={`/activities/${activity.id}`}
              key={activity.id}
              style={{ textDecoration: "none" }}
            >
              <Card elevation={4}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="100"
                    image={`/images/categoryImages/${activity.category}.jpg`}
                    alt="activity category img"
                    sx={{ objectFit: "cover" }}
                  />
                  <CardContent>
                    <Typography variant="h6" textAlign={"center"} mb={1}>
                      {activity.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      textAlign={"center"}
                      display={"flex"}
                      flexDirection={"column"}
                    >
                      <span>{format(activity.date, "do LLL yyyy")}</span>
                      <span>{format(activity.date, "h:mm a")}</span>
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
          ))}
      </Grid2>
    </Box>
  );
}
