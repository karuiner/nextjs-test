import Link from "next/link";
import BaseLayout from "../layout";

export default function Test() {
  return (
    <BaseLayout>
      <div>
        <Link href="/">
          <a>돌아가기</a>
        </Link>
      </div>
    </BaseLayout>
  );
}
