import { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import BaseLayout from "../component/layout";
import useSWR from "swr";
import Main from "../component/main";
import Admin from "../component/admin";

let tdata = {
  login: false,
  role: "",
};

function SetData() {
  const { data, mutate } = useSWR("data", () => tdata);
  return {
    data: data || {},
    mutate: (name, value) => {
      data[name] = value;
      mutate();
    },
  };
}

export default function Home() {
  let { data, mutate } = SetData();

  return (
    <>
      {data.login && data.role === "user" ? (
        <BaseLayout>
          <Main></Main>
        </BaseLayout>
      ) : null}
      {data.login && data.role === "admin" ? (
        <BaseLayout>
          <Main></Main>
        </BaseLayout>
      ) : null}
      {!data.login ? (
        <BaseLayout>
          <button
            onClick={() => {
              console.log(data);
              if (data.login) {
                mutate("role", "");
              } else {
                mutate("role", "user");
              }
              mutate("login", !data.login);
            }}
          >
            유저 로그인
          </button>
          <button
            onClick={() => {
              console.log(data);
              if (data.login) {
                mutate("role", "");
              } else {
                mutate("role", "admin");
              }
              mutate("login", !data.login);
            }}
          >
            어드민 로그인
          </button>
          <button>역활 수정 </button>
          <div>{data.login}</div>
          <div>{data.role}</div>
        </BaseLayout>
      ) : null}
    </>
  );
}
