import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import BaseLayout from "../../component/layout";
import { rootState } from "../../extra/state";

export default function Login() {
  const [data, setdata] = useRecoilState(rootState);
  const [input, setInput] = useState({ username: "", password: "" });
  const router = useRouter();

  function handle() {
    let { username, password } = input;
    if (username === "testuser" && password === "testuser") {
      setdata({ login: true, role: "user" });
    } else if (username === "admin" && password === "admin") {
      setdata({ login: true, role: "admin" });
    }
  }
  useEffect(() => {
    if (data.login) {
      router.push("/");
    }
  });

  return (
    <BaseLayout>
      <div>
        <div>
          <Link href="/">
            <a>돌아가기</a>
          </Link>
        </div>
        <div>
          <div>
            <input
              value={input.username}
              onChange={(e) => {
                setInput({ ...input, username: e.target.value });
              }}
              type="text"
              placeholder="input the username"
            />
          </div>
          <div>
            <input
              value={input.password}
              onChange={(e) => {
                setInput({ ...input, password: e.target.value });
              }}
              type="password"
              placeholder="input the password"
            />
          </div>
          <div>
            <button onClick={handle}>로그인</button>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
}
