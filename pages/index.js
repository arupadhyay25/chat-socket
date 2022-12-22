import React, { useContext } from "react";
import { Button, Input } from "@chakra-ui/react";
import { Context } from "../context";
import { useRouter } from "next/router";
import axios from "axios";

export default function Auth() {
  let { username, setusername, secret, setsecret } = useContext(Context);

  let router = useRouter();

  let key = "80bec4fd-37e3-46a6-83f5-ad316156a9be";

  let onSubmit = (e) => {
    e.preventDefault();
    if (username.length === 0 || secret.length === 0) return;

    axios
      .put(
        "https://api.chatengine.io/users/",
        { username, secret },
        { headers: { "Private-key": "80bec4fd-37e3-46a6-83f5-ad316156a9be" } }
      )
      .then((r) => router.push("/chats"));
  };

  return (
    <div
      style={{
        width: "60%",
        margin: "auto",
        textAlign: "center",
        marginTop: "100px",
      }}
    >
      <form onSubmit={(e) => onSubmit(e)}>
        <div>Next js Chat</div>
        <br />
        <div>
          <Input
            w={"60%"}
            placeholder="E-mail"
            type={"text"}
            onChange={(e) => setusername(e.target.value)}
          />
        </div>
        <br />
        <div>
          <Input
            w={"60%"}
            placeholder="Password"
            type={"password"}
            onChange={(e) => setsecret(e.target.value)}
          />
        </div>
        <br />
        <div>
          <Button type="submit"> Login</Button>
        </div>
      </form>
    </div>
  );
}
