import { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import BaseLayout from "../component/layout";
import Main from "../component/main";
import Admin from "../component/admin";

let tdata = {
  login: false,
  role: "",
};

export default function Home() {
  let [data, setdata] = useState(tdata);
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
              setdata({ login: !data.login, role: data.login ? "" : "user" });
            }}
          >
            유저 로그인
          </button>
          <button
            onClick={() => {
              setdata({ login: !data.login, role: data.login ? "" : "admin" });
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
