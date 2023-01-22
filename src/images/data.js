import L_PROFILE_PHOTO from "./small-photo.png";
import L_LOCK from "./lock-icon.png";
import L_NOTE from "./note-icon.png";

export const accountsData = [
    { platform: "facebook"},
    { platform: "instagram"},
    { platform: "none" },
    { platform: "none" },
]

export const userData = {
    profilePhoto: L_PROFILE_PHOTO, 
    name: 'israel_israeli', 
    followers: '39.9K', 
    type: 'vip'
}

export const securityData = [
    {
      id: '88',
      task: "Pick a strong password",
      priority: "High",
      effort: "2 min",
      done: false,
    },
    {
      id: '89',
      task: "Torn on two-factor autentication",
      priority: "Medium",
      effort: "2-10 min",
      done: false,
    },
    {
      id: '90',
      task: "Download your data",
      priority: "Low",
      effort: "2 min",
      done: false,
    },
    {
      id: '91',
      task: "Check Login activity",
      priority: "Low",
      effort: "5 min",
      done: false,
    },
    {
      id: '90',
      task: "Change Message Controls",
      priority: "Medium",
      effort: "2 min",
      done: false,
    },
];

export const problemsData = [
  { text: "Mass of disableding account", icon: L_LOCK},
  { text: "Mass of disableding account", icon: L_NOTE},
  { text: "Mass of disableding account", icon: L_LOCK},
  { text: "Mass of disableding account", icon: L_NOTE},
];
