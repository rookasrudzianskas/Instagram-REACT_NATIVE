import React from "react";
import {Text} from "react-native";
import ProfilePicture from "../../components/ProfilePicture";

const HomeScreen = () => {
   return (
      <>
         <ProfilePicture uri="https://pbs.twimg.com/profile_images/1350895249678348292/RS1Aa0iK_400x400.jpg" />
         <ProfilePicture uri="https://randomuser.me/api/portraits/men/18.jpg" />
         <ProfilePicture uri="https://randomuser.me/api/portraits/men/28.jpg" />
         <ProfilePicture uri="https://randomuser.me/api/portraits/men/29.jpg" />
      </>
)
}

export default HomeScreen;
