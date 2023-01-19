import L_PROFILE_PHOTO from "./small-photo.png";
import L_FACEBOOK from "./small-facebook.svg";
import L_INSTAGRAM from "./small-instagram.svg";

export const accountsData = [
    { platform: "facebook", iconSrc: L_FACEBOOK },
    { platform: "instagram", iconSrc: L_INSTAGRAM },
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
      task: "Pick a strong rassword",
      priority: "High",
      effort: "2 min",
      done: false,
    },
    {
      task: "Torn on two-factor autentication",
      priority: "Medium",
      effort: "2-10 min",
      done: false,
    },
    {
      task: "Download your data",
      priority: "Low",
      effort: "2 min",
      done: false,
    },
    {
      task: "Check Login activity",
      priority: "Low",
      effort: "5 min",
      done: false,
    },
    {
      task: "Change Message Controls",
      priority: "Medium",
      effort: "2 min",
      done: false,
    },
  ];
