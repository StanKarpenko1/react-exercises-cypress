import { useState } from "react";
import Like from "../components/Like/Like";
import GoHomeButton from "../components/GoHome/GoHome";

const LikePage = () => {
  const [liked, setLiked] = useState(false);

  return (
    <>
      <div>
        <h1>Like Page</h1>
        <div>
        <Like  status={liked} onClick={() => setLiked(!liked)} />
        </div>
        <GoHomeButton />
      </div>
    </>
  );
};

export default LikePage;
