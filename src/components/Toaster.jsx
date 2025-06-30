import { Toaster as ToastMaker } from "react-hot-toast";

const Toaster = () => {
  return (
    <ToastMaker
      toastOptions={{
        style: {
          fontSize: "14px",
        },
        success: {
          iconTheme: {
            primary: "#4b8b3b",
          },
        },
      }}
    />
  );
};

export default Toaster;
