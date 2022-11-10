import { toast } from "react-toastify";

export const requestJwtToken = (mail) => {
  const email = {
    email: mail,
  };
  fetch("https://koni-s-kitchen-server-side.vercel.app/jwt-token", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(email),
  }).then((res) =>
    res.json().then((data) => {
      localStorage.setItem("accessToken", data.data);
    })
  );
};

export const notifySuccess = (massage) => {
  toast.success(massage, {
    position: "bottom-right",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
};
export const notifyWarn = (massage) => {
  toast.warn(massage, {
    position: "bottom-right",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
};
export const notifyError = (massage) => {
  toast.error(massage, {
    position: "bottom-right",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
};
