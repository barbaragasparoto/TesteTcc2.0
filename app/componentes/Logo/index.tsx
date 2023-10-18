import React, { useState } from "react";
import { Dimensions, Image, StyleSheet } from "react-native";
import logo from "../../../assets/logo.png";

const width = Dimensions.get("screen").width;

export default function Logo() {
  return (
    <>
      <Image source={logo} style={estilos.logo} />
    </>
  );
}

const estilos = StyleSheet.create({
  logo: {
    width: "90%",
    height: (420 / 594) * width,
    left: "8%",
    marginBottom: 55,
    marginTop:25
  },
});
