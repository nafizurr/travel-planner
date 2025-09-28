"use server";
//make use of the login and logout functions from auth but in my own functions
//consider a google acc signin after 
import {signIn, signOut} from "@/auth";

export const login = async () => {
    await signIn("github", {redirectTo: "/"});
}

export const logOut = async () => {
    await signOut({redirectTo: "/"});
}