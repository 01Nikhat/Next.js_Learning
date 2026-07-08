"use server";

import axios from "axios";
import { redirect } from "next/navigation";

const API_URL = "http://localhost:3001";

type UserType = {
  id: string;
  name: string;
  email: string;
  password: string;
};


export const loginAction = async (formData: FormData) => {

  const email = formData.get("email");
  const password = formData.get("password");

  console.log("EMAIL:", email);
  console.log("PASSWORD:", password);

  let user: UserType | null = null;


  try {

    const response = await axios.get(
      `${API_URL}/users?email=${email}&password=${password}`
    );


    console.log("API RESPONSE:", response.data);


    user = response.data[0];


    if (!user) {
      throw new Error("Invalid Credentials");
    }


  } catch (error) {

    console.log("REAL ERROR:", error);

    throw error;

  }


  redirect("/contact");

};