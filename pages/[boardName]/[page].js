import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import BaseLayout from "../../component/layout";
import { rootState } from "../../extra/state";

export default function List() {
  const router = useRouter();
  const { boardName, page } = router.query;
  return (
    <BaseLayout>
      <div>{[boardName, page]} </div>
    </BaseLayout>
  );
}
