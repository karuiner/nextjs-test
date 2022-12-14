import { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import BaseLayout from "../component/layout";
import Main from "../component/main";
import Admin from "../component/admin";
import { useRecoilState } from "recoil";
import { rootState } from "../extra/state";
import { Router, useRouter } from "next/router";

export default function Home() {
  const [data, setdata] = useRecoilState(rootState);
  const router = useRouter();
  useEffect(() => {
    if (!data.login) {
      router.push("/login");
    }
  });

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
    </>
  );
}
