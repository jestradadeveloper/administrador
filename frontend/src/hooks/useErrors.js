import { useEffect } from "react";

export const useShowErrors = () => {
  const { error, errorMessage } = useSelector((state) => state.ui);
  useEffect(() => {}, [error]);
};
