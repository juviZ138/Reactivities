using System;

namespace API.DTOs;

public class EditProfileDTO
{
    public required string DisplayName { get; set; }
    public string? Bio { get; set; }
}
