import { useEffect } from "react";
import { useAppContext } from "../contexts/AppContext/AppContext";
import { usePersistedContext } from 'react-persist-context'

import { useRouter } from 'next/router';


export default function Inbox() {

  const { state: { connected, user } } = usePersistedContext();
  const router = useRouter();
  console.log(user);

  useEffect(() => {
    if (!connected) {
      router.push('/')
    }
  },[connected]);

  return (
    <div>
       <p>TOTAL </p>
    </div>
  );
}
