export const person = {
  name: "Arun Kumar Giri",
  handle: "ArPriCode",
  title: "AI/ML Engineer",
  school: "IIT Patna",
  city: "New Delhi",
};

export const profiles = [
  { name: "LeetCode", href: "https://leetcode.com/u/ArPriCode/", note: "DSA", group: "dsa" },
  { name: "GitHub", href: "https://github.com/ArPriCode", note: "Code", group: "home" },
  { name: "Codeforces", href: "https://codeforces.com/profile/Arun9696", note: "CP", group: "dsa" },
  { name: "GeeksforGeeks", href: "https://www.geeksforgeeks.org/profile/arun9696?tab=activity", note: "DSA", group: "dsa" },
  { name: "AtCoder", href: "https://atcoder.jp/users/Arun24", note: "CP", group: "dsa" },
  { name: "Codolio", href: "https://codolio.com/profile/Arun9696", note: "DSA", group: "dsa" },
  { name: "HackerRank", href: "https://www.hackerrank.com/profile/quantagiri2", note: "DSA", group: "dsa" },
  { name: "CodeChef", href: "https://www.codechef.com/users/quata_error_76", note: "CP", group: "dsa" },
  { name: "TensorTonic", href: "https://www.tensortonic.com/profile/arun9696", note: "ML", group: "ml" },
  { name: "Deep-ML", href: "https://www.deep-ml.com/profile/Nh0kyr44iCOWNMv3ez9BFdMbwfM2", note: "ML", group: "ml" },
  { name: "Kaggle", href: "https://www.kaggle.com/arunkumargiri", note: "Data", group: "ml" },
  { name: "Hugging Face", href: "https://huggingface.co/quanta9", note: "Models", group: "ml" },
  { name: "DrivenData", href: "https://www.drivendata.org/users/arun9696/", note: "ML", group: "ml" },
  { name: "HackerEarth", href: "https://www.hackerearth.com/@quantagiri2", note: "DSA", group: "dsa" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/arun-kumar-giri-54a0b7318/", note: "Work", group: "home" },
  { name: "Medium", href: "https://medium.com/@arun96", note: "Write", group: "home" },
] as const;

export type PlatformName = (typeof profiles)[number]["name"];
export type ProfileGroup = (typeof profiles)[number]["group"];

export function profilesByGroup(group: ProfileGroup) {
  return profiles.filter((profile) => profile.group === group);
}
