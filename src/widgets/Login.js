import {
     BorderSpinner,
     Button,
     Column,
     EmptyBox,
     H2,
     I,
     Input,
     P,
} from "@riadh-adrani/recursive/components";
import { goTo } from "@riadh-adrani/recursive/router";
import { getState, setState, updateAfter } from "@riadh-adrani/recursive/state";
import FormButton from "../components/FormButton";
import InputField from "../components/InputField";
import { authenticate } from "../service/Firebase";

export default () => {
     const [email] = setState("login-email", "");
     const [password] = setState("login-password", "");
     const [loading, setLoading] = setState("login-loading", false);
     const [alert, setAlert] = setState("login-alert", "");

     return Column({
          style: {
               className: "fixed-login",
               normal: {
                    position: "fixed",
                    inset: "0px",
                    justifyContent: "center",
                    alignItems: "center",
                    background: "#1e1e1eee",
               },
          },
          children: [
               Column({
                    style: {
                         className: "login-popup",
                         normal: {
                              width: "400px",
                              border: "1px solid #42424277",
                              padding: "40px 20px",
                              borderRadius: "10px",
                         },
                    },
                    children: loading
                         ? Column({
                                style: {
                                     className: "loading-screen",
                                     normal: {
                                          alignItems: "center",
                                     },
                                },
                                children: [
                                     BorderSpinner({ color: "white" }),
                                     EmptyBox({ height: "10px" }),
                                     P({ text: "Signing in ..." }),
                                ],
                           })
                         : [
                                I({
                                     className: "fa-solid fa-circle-xmark",
                                     style: {
                                          className: "login-x",
                                          normal: {
                                               fontSize: "2em",
                                               position: "absolute",
                                               top: "40px",
                                               right: "40px",
                                               cursor: "pointer",
                                          },
                                          hover: {
                                               transform: "scale(1.3)",
                                          },
                                     },
                                     events: {
                                          onClick: () => {
                                               goTo("/");
                                          },
                                     },
                                }),
                                H2({ text: "Login" }),
                                EmptyBox({ height: "20px" }),
                                InputField("login-email", "email"),
                                EmptyBox({ height: "10px" }),
                                InputField("login-password", "password", "password"),
                                EmptyBox({ height: "10px" }),
                                FormButton("Login", () => {
                                     setLoading(true);
                                     authenticate(email, password)
                                          .then((res) => {
                                               updateAfter(() => {
                                                    getState("user")[1]({
                                                         auth: true,
                                                         user: res.user,
                                                    });
                                                    setLoading(false);
                                                    goTo("/edit");
                                               });
                                          })
                                          .catch((err) => {
                                               updateAfter(() => {
                                                    setLoading(false);
                                                    setAlert(err);
                                               });
                                          });
                                }),
                                alert
                                     ? P({
                                            text: alert,
                                            style: {
                                                 className: "login-alert",
                                                 normal: {
                                                      color: "red",
                                                      marginTop: "10px",
                                                 },
                                            },
                                       })
                                     : "",
                           ],
               }),
          ],
     });
};
