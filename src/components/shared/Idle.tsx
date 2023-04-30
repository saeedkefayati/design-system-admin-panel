import { useIdle } from "@mantine/hooks";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IDLE_TIMEOUT } from "~/constant/constant";

const Idle = () => {
  const idle = useIdle(IDLE_TIMEOUT);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      if (idle) {
        navigate("/lock", { replace: true });
      }
    }, IDLE_TIMEOUT);
    return () => {
      clearInterval(timer);
    };
  }, [idle]);

  return <div />;
};

export default Idle;
