import { BorderSpinner, Column, EmptyBox, H2, P } from "@riadh-adrani/recursive/components";
import { getParams, goTo } from "@riadh-adrani/recursive/router";
import { getState, setState, updateAfter } from "@riadh-adrani/recursive/state";
import FormButton from "../components/FormButton";
import InputField from "../components/InputField";
import CloseButton from "../elements/CloseButton";
import { addAnimation, commitAnimation } from "../service/Firebase";

export default () => {
     const params = getParams();
     let current = { title: "", preview: "", artwork: "", download: "", youtube: "", tags: "" };

     if (params.id) {
          current = getState("user-data")[0].backgrounds.find((bg) => bg.id === params.id);
     }

     const [title, setTitle] = setState("add-bg-name", current.title);
     const [preview, setPreview] = setState("add-bg-preview", current.preview);
     const [artwork, setArtwork] = setState("add-bg-artwork", current.artwork);
     const [youtube, setYoutube] = setState("add-bg-yt", current.youtube);
     const [download, setDownload] = setState("add-bg-dwld", current.download);
     const [tags, setTags] = setState("add-bg-tags", current.tags);

     const [loading, setLoading] = setState("add-bg-loading", false);

     return Column({
          style: {
               className: "add-abg",
               normal: {
                    position: "fixed",
                    inset: "0px",
                    zIndex: 4,
                    height: "100%",
                    padding: "20px",
                    backgroundColor: "#1e1e1eee",
                    justifyContent: "center",
               },
          },
          children: loading
               ? Column({
                      style: {
                           className: "loading-overlay",
                           scoped: true,
                           normal: {
                                alignItems: "center",
                           },
                      },
                      children: [
                           BorderSpinner({ color: "white" }),
                           EmptyBox({ height: "10px" }),
                           P({ text: "Working ..." }),
                      ],
                 })
               : [
                      CloseButton("/edit/animated-backgrounds"),
                      Column({
                           style: {
                                className: "add-animated-bg",
                                scoped: true,
                                normal: {
                                     backgroundImage: `url(${preview})`,
                                     backgroundRepeat: "no-repeat",
                                     backgroundSize: "cover",
                                     backgroundPosition: "center center",
                                     borderRadius: "5px",
                                     border: "1px solid #424242",
                                },
                           },
                           children: [
                                Column({
                                     style: {
                                          className: "add-edit-background-bg",
                                          normal: {
                                               padding: "50px 100px",
                                               backdropFilter: "blur(5px)",
                                               borderRadius: "5px",
                                          },
                                     },
                                     children: [
                                          H2({
                                               text: params.id
                                                    ? "Edit Animated Background"
                                                    : "New Animated Background",
                                          }),
                                          EmptyBox({ height: "10px" }),
                                          InputField("add-bg-name", "name"),
                                          EmptyBox({ height: "10px" }),
                                          InputField("add-bg-artwork", "artwork link"),
                                          EmptyBox({ height: "10px" }),
                                          InputField("add-bg-preview", "preview link"),
                                          EmptyBox({ height: "10px" }),
                                          InputField("add-bg-yt", "youtube link"),
                                          EmptyBox({ height: "10px" }),
                                          InputField("add-bg-dwld", "download link"),
                                          EmptyBox({ height: "10px" }),
                                          InputField("add-bg-tags", "tags"),
                                          EmptyBox({ height: "10px" }),
                                          FormButton(params.id ? "Commit" : "Add", () => {
                                               setLoading(true);

                                               if (params.id) {
                                                    commitAnimation({
                                                         title,
                                                         artwork,
                                                         download,
                                                         preview,
                                                         tags,
                                                         youtube,
                                                    })
                                                         .then(() => {
                                                              updateAfter(() => {
                                                                   setArtwork("");
                                                                   setDownload("");
                                                                   setPreview("");
                                                                   setTitle("");
                                                                   setYoutube("");
                                                                   setTags("");
                                                                   setLoading(false);
                                                              });
                                                         })
                                                         .catch(() => {});
                                               } else {
                                                    addAnimation({
                                                         title,
                                                         artwork,
                                                         download,
                                                         preview,
                                                         tags,
                                                         youtube,
                                                    })
                                                         .then(() => {
                                                              updateAfter(() => {
                                                                   setArtwork("");
                                                                   setDownload("");
                                                                   setPreview("");
                                                                   setTitle("");
                                                                   setYoutube("");
                                                                   setTags("");
                                                                   setLoading(false);
                                                              });
                                                         })
                                                         .catch(() => {});
                                               }
                                          }),
                                     ],
                                }),
                           ],
                      }),
                 ],
     });
};
