import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import React, { useState, useEffect, useContext } from "react";
import { Context } from "../context";

const ChatEngine = dynamic(() =>
  import("react-chat-engine").then((module) => module.ChatEngine)
);

const MessageFormSocial = dynamic(() =>
  import("react-chat-engine").then((module) => module.MessageFormSocial)
);

export default function Chats() {
  let { username, secret } = useContext(Context);
  let [showChat, setshowchat] = useState(false);
  let router = useRouter();

  useEffect(() => {
    if (typeof document !== null) {
      setshowchat(true);
    }
  });
  useEffect(() => {
    if (username.length === 0 || secret.length === 0) {
      router.push("/");
    }
  });

  if (!showChat) return <div />;

  return (
    <div>
      chats
      <ChatEngine
        hieght="calc(100vh-200px)"
        projectID="dcdb085f-1221-4a2a-8ece-5b090c8179eb"
        userName={username}
        userSecret={secret}
        renderNewMessageForm={() => <MessageFormSocial />}
      />
    </div>
  );
}
