import Link from "next/link";
import BaseLayout from "../../component/layout";

export default function Login() {
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
