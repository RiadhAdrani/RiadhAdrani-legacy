import { Input } from "@riadh-adrani/recursive/components";
import { getState } from "@riadh-adrani/recursive/state";

export default (stateUID, placeholder, type = "text") => {
     const [get, set] = getState(stateUID);

     return Input({
          value: get,
          placeholder,
          type,
          events: { onChange: (e) => set(e.target.value) },
          style: {
               className: "input-field",
               normal: {
                    background: "#1e1e1e",
                    border: "1px solid #424242",
                    borderRadius: "5px",
                    padding: "10px 20px",
                    color: "inherit",
                    fontFamily: "inherit",
                    transition: "0.3s",
               },
               focus: {
                    outline: "1px solid #1e7e1e",
               },
          },
     });
};
