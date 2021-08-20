import react from "react";
import FontAwesomeIcons from "../../abstracted-components/icons/FontAwesomeIcons";
import "./FilterableListStyle.css";

class FilterableList extends react.Component {
     
     rawList = [
          {
               video: "https://www.youtube.com/embed/4ZmiGGTQ3Cg",
               title: "Artorias The Abyss Walker",
               download: "",
               tag: "dark souls 1 game artorias abyss walker fromsoftware bandai namco character thomas bergersen two steps from hell stronger faster braver extended",
          },
          {
               video: "https://www.youtube.com/embed/ugyXwQieSE4",
               title: "Elden Ring",
               download:
                    "https://drive.google.com/file/d/1G2QyA1Un-dDtBU_D7AbO5mc7NuvnFEe0/view?usp=sharing",
               tag: "elden ring cover art dark souls sekiro shadows die twice from software bandai namco",
          },
          {
               video: "https://www.youtube.com/embed/dm3jSHRWT9E",
               title: "Cloud Castle",
               download:
                    "https://drive.google.com/file/d/1r7ojsvf-Y-ezsLQvSI8_VPzwfpS5hkhz/view?usp=sharing",
               tag: "cloud realm cloud castle steven coltart marcus warner pinnacle floating",
          },
          {
               video: "https://www.youtube.com/embed/pWVvNaEJgmQ",
               title: "The Shepherd",
               download:
                    "https://drive.google.com/file/d/1kZLA_n4TkiKqZHQO5s3O917-9n0rThPO/view?usp=sharing",
               tag: "the shepherd",
          },
          {
               video: "https://www.youtube.com/embed/QGiSaJZ_3pY",
               title: "In The Jungle",
               download:
                    "https://drive.google.com/file/d/1Wgi1XuvHibmqTsEyhrpCmZuln9SHuxyb/view?usp=sharing",
               tag: "in the jungle brunhubille wildheart extended",
          },
          {
               video: "https://www.youtube.com/embed/LhQabbMRGgw",
               title: "Aura",
               download:
                    "https://drive.google.com/file/d/15asmLzgQGcVS6jZexcfr2CzekV-06E5I/view?usp=sharing",
               tag: "aura thomas bergersen aura extended illusion tree aurora",
          },
          {
               video: "https://www.youtube.com/embed/xIEZ2WiRCjc",
               title: "Pinnacle",
               download:
                    "https://drive.google.com/file/d/1s0Jw5gpVzn_7QDSDwJbz8TLDPk5cgYo3/view?usp=sharing",
               tag: "steven coltart marcus warner pinnacle extended mountain",
          },
          {
               video: "https://www.youtube.com/embed/S0RY41Av3m8",
               title: "Ornstein The Dragonslayer",
               download:
                    "https://drive.google.com/file/d/1KUd4SrpP9nFyJuKZEEmreE4S-e-VpbHv/view?usp=sharing",
               tag: "fox sailor a world of knights and dragons extended dark souls ornstein smough game",
          },
          {
               video: "https://www.youtube.com/embed/etSzV1ZFPeU",
               title: "Elements",
               download:
                    "https://drive.google.com/file/d/1-3FQlxbHOBKNq8ZVrlnnsESIDWwzvX3P/view?usp=sharing",
               tag: "position music horizon extended danny olson elements sea mountain",
          },
          {
               video: "https://www.youtube.com/embed/5--0MT97z5Q",
               title: "Miracles (Remastered)",
               download:
                    "https://drive.google.com/file/d/1gFEzudEfNhkn--tGjS3evoRFDVS-8tK5/view?usp=sharing",
               tag: "two steps from hell miracles extended thomas bergersen star wars lone warrior water",
          },
          {
               video: "https://www.youtube.com/embed/fIFf5j6d_tE",
               title: "Iomann",
               download:
                    "https://drive.google.com/file/d/1glvfzZzxFksijb_Lbe_KvglehXzfLvS7/view?usp=sharing",
               tag: "really slow motions RSM iomann extended nature",
          },
          {
               video: "https://www.youtube.com/embed/w8We8qwz1a0",
               title: "Soul of Cinder",
               download:
                    "https://drive.google.com/file/d/1-WD44Swr5Q9YrZbMFS1ddoZsxgwv9R3J/view?usp=sharing",
               tag: "dark souls 3 dark souls iii firelink armor helmet fromsoftware bandai namco",
          },
          {
               video: "https://www.youtube.com/embed/21DeddkFZtM",
               title: "Humanity",
               download:
                    "https://drive.google.com/file/d/1LQ883PBKTPQknNx6qpoOCcZmJYJ23jA2/view?usp=sharing",
               tag: "humanity thomas bergersen cover art chapter two steps from hell tsfh",
          },
          {
               video: "https://www.youtube.com/watch?v=nHrxX7_UUck",
               title: "Sailing with the Clouds",
               download:
                    "https://drive.google.com/file/d/1FkgDEEBoGva7AT0zSPm6lFrO4bR3dprO/view?usp=sharing",
               tag: "marcus warner white sails ship whale clouds",
          },
          {
               video: "https://www.youtube.com/watch?v=eEajeUuto6I",
               title: "Burning Field",
               download:
                    "https://drive.google.com/file/d/1QvdQwGpmaLLNWstRHZcVaAoLhZh4Nft0/view?usp=sharing",
               tag: "dirk ehlert dos brains burning skies fire warrior",
          },
          {
               video: "https://www.youtube.com/watch?v=LwjDNeB2KmY",
               title: "Hope",
               download:
                    "https://drive.google.com/file/d/1QvdQwGpmaLLNWstRHZcVaAoLhZh4Nft0/view?usp=sharing",
               tag: "dirk ehlert dos brains burning skies fire warrior",
          },
          {
               video: "https://www.youtube.com/watch?v=GQBjrVN46U4",
               title: "Charge!",
               download:
                    "https://drive.google.com/file/d/1QvdQwGpmaLLNWstRHZcVaAoLhZh4Nft0/view?usp=sharing",
               tag: "dirk ehlert dos brains burning skies fire warrior",
          },
          {
               video: "https://www.youtube.com/embed/LPgcDiq_ZL4",
               title: "Rider of Tsushima",
          },
          {
               video: "https://www.youtube.com/watch?v=Ar8bvX0W_qo",
               title: "Blue Cave",
          },
          {
               video: "https://www.youtube.com/watch?v=p4jMXvRFmKk",
               title: "Men of Honor (Remastered)",
          },
          {
               video: "https://www.youtube.com/watch?v=MyEpQe_eRHc",
               title: "Arcade Master",
          },
          {
               video: "https://www.youtube.com/watch?v=ITNLFzdKf9I",
               title: "Crown of the King",
          },
          {
               video: "https://www.youtube.com/embed/mfLip1qOXvc",
               title: "Modern Warfare (2019)",
          },
          {
               video: "https://www.youtube.com/embed/62wlUh8nE4k",
               title: "Evergreen (Remastered)",
          },
          {
               video: "https://www.youtube.com/watch?v=eO5shjpI0wY",
               title: "Never Give Up On Your Dreams",
          },
          {
               video: "https://www.youtube.com/watch?v=HX5CHUYL034",
               title: "Roots",
          },
          {
               video: "https://www.youtube.com/watch?v=pc7ABZ-mDKE",
               title: "Aria",
          },
          {
               video: "https://www.youtube.com/watch?v=VLQ_bwclyfU",
               title: "Boundless Adventure",
          },
          {
               video: "https://www.youtube.com/watch?v=p_s4ycGMhNg",
               title: "Serious Sam 4",
          },
          {
               video: "https://www.youtube.com/embed/eO5shjpI0wY",
               title: "The Elephant and The Bird",
          },
          {
               video: "https://www.youtube.com/watch?v=o71e0tC1ZcQ",
               title: "Dragon's Wings",
          },
          {
               video: "https://www.youtube.com/watch?v=WtHPLxZcTwU",
               title: "Remembrance",
          },
          {
               video: "https://www.youtube.com/watch?v=R6OJ6BVyn60",
               title: "Last Breath",
          },
          {
               video: "https://www.youtube.com/watch?v=N-XJcXHpTLQ",
               title: "Last Breath (No Birds)",
          },
          {
               video: "https://www.youtube.com/embed/eO5shjpI0wY",
               title: "High Sea",
          },
          {
               video: "https://www.youtube.com/watch?v=EvMEqLbeyfo",
               title: "Sea Dragons",
          },
          {
               video: "https://www.youtube.com/watch?v=CovzAGTOkOw",
               title: "Honor",
          },
          {
               video: "https://www.youtube.com/watch?v=9wmUNJfCHPk",
               title: "An African Tribe",
          },
          {
               video: "https://www.youtube.com/watch?v=B8vYnXUKZ7k",
               title: "A Game of Chess",
          },
          {
               video: "https://www.youtube.com/watch?v=xc70slnF_k4",
               title: "Homecoming",
          },
          {
               video: "https://www.youtube.com/watch?v=DAcDhljCyfo",
               title: "For Honor (Remastered)",
          },
          {
               video: "https://www.youtube.com/watch?v=75xj2Y5Q5nU",
               title: "Mecha Batman",
          },
          {
               video: "https://www.youtube.com/watch?v=kQbw2eHaJMc",
               title: "Mountain Call",
          },
          {
               video: "https://www.youtube.com/watch?v=gjnPGMp0MV4",
               title: "Innocence",
          },
          {
               video: "https://www.youtube.com/watch?v=Ics-FZ_-2cA",
               title: "Guardian of The Forest",
          },
          {
               video: "https://www.youtube.com/watch?v=_g1V8wSC70g",
               title: "In The End",
          },
          {
               video: "https://www.youtube.com/watch?v=bW_N-ROZs0o",
               title: "Pegasus (Remastered)",
          },
          {
               video: "https://www.youtube.com/watch?v=mgj4b8learc",
               title: "Dawn",
          },
          {
               video: "https://www.youtube.com/watch?v=gGIrLHUJ9Cw",
               title: "Chapters",
          },
          {
               video: "https://www.youtube.com/watch?v=3BPBK9kp3dg",
               title: "Tide",
          },
          {
               video: "https://www.youtube.com/watch?v=LkhcA4krZos",
               title: "Magika's Dragon",
          },
          {
               video: "https://www.youtube.com/watch?v=XvummTlX45k",
               title: "Sun and Stars",
          },
          {
               video: "https://www.youtube.com/watch?v=8FnuDu7W3rI",
               title: "Stargazer",
          },
          {
               video: "https://www.youtube.com/watch?v=yfheyi7CZCY",
               title: "Sekiro's Fate",
          },
          {
               video: "https://www.youtube.com/watch?v=7UQWZkmGCzU",
               title: "Doom Eternal",
          },
          {
               video: "https://www.youtube.com/watch?v=i6LeEdCu2OM",
               title: "Helsinki",
          },
          {
               video: "https://www.youtube.com/watch?v=kvUabqMxin0",
               title: "Lacrimosa",
          },
          {
               video: "https://www.youtube.com/watch?v=Id7Q4_GlhSQ",
               title: "Fire Tower",
          },
          {
               video: "https://www.youtube.com/watch?v=uqEdiOfUh7s",
               title: "First Flight",
          },
          {
               video: "https://www.youtube.com/watch?v=-KjqpmlqmTc",
               title: "Journey to Aurora",
          },
          {
               video: "https://www.youtube.com/watch?v=7gt0P_Cb9cE",
               title: "Friendship is Magic",
          },
          {
               video: "https://www.youtube.com/watch?v=aHs2ayWn-rg",
               title: "Starswirl",
          },
          {
               video: "https://www.youtube.com/watch?v=FMWRooqBRiI",
               title: "Divebomb",
          },
          {
               video: "https://www.youtube.com/watch?v=Dn1EnebK7hg",
               title: "Chosen by the Sword",
          },
          {
               video: "https://www.youtube.com/watch?v=0Dpx9ubVhuw",
               title: "It Tells a Story",
          },
          {
               video: "https://www.youtube.com/watch?v=uW_ASGYN63Y",
               title: "Octavia Tree",
          },
          {
               video: "https://www.youtube.com/watch?v=LFrVikAUpzM",
               title: "Horseman",
          },
          {
               video: "https://www.youtube.com/watch?v=HNQL3zK6sOs",
               title: "Higher Hopes",
          },
          {
               video: "https://www.youtube.com/watch?v=qbbenSNRIsM",
               title: "Prophetic Vision",
          },
          {
               video: "https://www.youtube.com/watch?v=5PA6C--J1f8",
               title: "Nemesis",
          },
          {
               video: "https://www.youtube.com/watch?v=U4edrDpNqrg",
               title: "Terra Nova",
          },
          {
               video: "https://www.youtube.com/watch?v=R6JQNWLFhao",
               title: "The Return of Pegasus",
          },
          {
               video: "https://www.youtube.com/watch?v=LS1Yp1gLqJM",
               title: "The Journey",
          },
          {
               video: "https://www.youtube.com/watch?v=Glo3SLuHSKE",
               title: "Star Sky",
          },
          {
               video: "https://www.youtube.com/watch?v=0uYBS1DSh_I",
               title: "Humanity (Chapter II)",
               download:
                    "https://drive.google.com/file/d/1qDjkJaRYkzImJkszUK8NfaMlUnaLphDM/view?usp=sharing",
               tag: "thomas bergersen humanity chapter 1 chapter i two steps from hell tsfh",
          },
          {
               video: "https://www.youtube.com/watch?v=PC1biSX3PkU",
               title: "Humanity (Chapter I)",
               download:
                    "https://drive.google.com/file/d/1qDjkJaRYkzImJkszUK8NfaMlUnaLphDM/view?usp=sharing",
               tag: "thomas bergersen humanity chapter 1 chapter i two steps from hell tsfh",
          },
          {
               video: "https://www.youtube.com/watch?v=9VMiHPoQRSw",
               title: "Soul of Cinder",
          },
          {
               video: "https://www.youtube.com/watch?v=GEcST3IFKOQ",
               title: "Skyborn",
          },
          {
               video: "https://www.youtube.com/watch?v=LS1Yp1gLqJM",
               title: "Skulls and Trombones",
          },
          {
               video: "https://www.youtube.com/watch?v=bUDE7LiJxbQ",
               title: "Sekiro : Shadows Die Twice",
          },
          {
               video: "https://www.youtube.com/watch?v=edUc82cFzXM",
               title: "Rune",
          },
          {
               video: "https://www.youtube.com/watch?v=Xk0wwcUkevE",
               title: "Run Free",
          },
          {
               video: "https://www.youtube.com/watch?v=4Ll3zz3Ci4E",
               title: "Ride to Victory",
          },
          {
               video: "https://www.youtube.com/watch?v=D01oQMDkH9E",
               title: "Race",
          },
          {
               video: "https://www.youtube.com/watch?v=W6sMroN_kt0",
               title: "Return to Life",
          },
          {
               video: "https://www.youtube.com/watch?v=drD4bm6_wlM",
               title: "Open your Eyes",
          },
          {
               video: "https://www.youtube.com/watch?v=lJLx3JAgKK8",
               title: "Old West",
          },
          {
               video: "https://www.youtube.com/watch?v=p8comDgmwoU",
               title: "Nova",
          },
          {
               video: "https://www.youtube.com/watch?v=Kw9m27wybyA",
               title: "Nightingale (Sunset)",
          },
          {
               video: "https://www.youtube.com/watch?v=miqAPmjnHns",
               title: "Nightingale (Night)",
          },
          {
               video: "https://www.youtube.com/watch?v=0xsB8ADesJI",
               title: "Never Give Up On your Dreams",
          },
          {
               video: "https://www.youtube.com/watch?v=Jm_rak672VU",
               title: "Neon Paradise",
          },
          {
               video: "https://www.youtube.com/watch?v=9sEap60-Zyo",
               title: "My Freedom",
          },
          {
               video: "https://www.youtube.com/watch?v=GJDryINmTKY",
               title: "Moonriser",
          },
          {
               video: "https://www.youtube.com/watch?v=Ac-lByh1-eA",
               title: "Modern Warfare",
          },
          {
               video: "https://www.youtube.com/watch?v=-EOF_MAa8Zc",
               title: "Meaning of Life",
          },
          {
               video: "https://www.youtube.com/watch?v=qjtQZmeKuvU",
               title: "Light Up The Sky",
          },
          {
               video: "https://www.youtube.com/watch?v=JPoaG_meYuw",
               title: "Liberatos",
          },
          {
               video: "https://www.youtube.com/watch?v=F2Bye9SmFOQ",
               title: "Legends Never Die",
          },
          {
               video: "https://www.youtube.com/watch?v=pt_ze9GKXwk",
               title: "Assassin's Creed Origins",
          },
          {
               video: "https://www.youtube.com/watch?v=3l668yGgAQI",
               title: "Inner Sanctum",
          },
          {
               video: "https://www.youtube.com/watch?v=PKqFvSZTQv8",
               title: "Immortalys",
          },
          {
               video: "https://www.youtube.com/watch?v=GTbY-cNMRI4",
               title: "Immortalys Imperia",
          },
          {
               video: "https://www.youtube.com/watch?v=Cs4Uz4QcE3k",
               title: "Hymn of The High Seas",
          },
          {
               video: "https://www.youtube.com/watch?v=aJPhrs-i0vU",
               title: "Hollow Knight",
          },
          {
               video: "https://www.youtube.com/watch?v=zHuHidnVXkw",
               title: "Heroes",
          },
          {
               video: "https://www.youtube.com/watch?v=dsmq20m2BIM",
               title: "Hero's Memories",
          },
          {
               video: "https://www.youtube.com/watch?v=nx_2Nr-yW_Q",
               title: "Halo Reach",
          },
          {
               video: "https://www.youtube.com/watch?v=oymvAWD9MTY",
               title: "Ghost of Eden",
          },
          {
               video: "https://www.youtube.com/watch?v=FgDxbedX9Bk",
               title: "Final Frontier",
          },
          {
               video: "https://www.youtube.com/watch?v=Hu02cYCaijQ",
               title: "Farewell Life",
          },
          {
               video: "https://www.youtube.com/watch?v=YAy3q0PQXos",
               title: "Facing Fears",
          },
          {
               video: "https://www.youtube.com/watch?v=rAfvvVrdkzw",
               title: "Everdream",
          },
          {
               video: "https://www.youtube.com/watch?v=SvIAZd-H_Mg",
               title: "Entropy",
          },
          {
               video: "https://www.youtube.com/watch?v=FtO921IEvUY",
               title: "Elements",
          },
          {
               video: "https://www.youtube.com/watch?v=uGig-NpsXmM",
               title: "Edge of Eternity",
          },
          {
               video: "https://www.youtube.com/watch?v=D1ZP-z_u8Eg",
               title: "Edge of Conscioucness",
          },
          {
               video: "https://www.youtube.com/watch?v=ViUJP1jnjIc",
               title: "Dragonwing",
          },
          {
               video: "https://www.youtube.com/watch?v=cGBBojI9NmY",
               title: "Dragonland",
          },
          {
               video: "https://www.youtube.com/watch?v=jA38fblAr70",
               title: "The Master of Death",
          },
          {
               video: "https://www.youtube.com/watch?v=86Kd8HlwqrA",
               title: "For The King",
          },
          {
               video: "https://www.youtube.com/watch?v=b2_s1spmI9c",
               title: "Bravestone",
          },
          {
               video: "https://www.youtube.com/watch?v=PgI9a5s3dYI",
               title: "You Are Light",
          },
          {
               video: "https://www.youtube.com/embed/n2ChUCMfzF8",
               title: "Pandora Journey",
          },
          {
               video: "https://www.youtube.com/embed/wyh5_ADAfk4",
               title: "Unbreakable",
          },
          {
               video: "https://www.youtube.com/embed/D7-bxfSrF1k",
               title: "Africa",
          },
          {
               video: "https://www.youtube.com/embed/AYXrLfKocg4",
               title: "Believe",
          },
          {
               video: "https://www.youtube.com/embed/UbGYuNa20mo",
               title: "Delta Squad",
          },
          {
               video: "https://www.youtube.com/embed/58TJ5PJfAmc",
               title: "Bayek of Siwa",
          },
          {
               video: "https://www.youtube.com/embed/58TJ5PJfAmc",
               title: "Ghost of Tsushima",
          },
          {
               video: "https://www.youtube.com/embed/XhjtJ4uyRvU",
               title: "Star Sky",
          },
     ];

     state = {
          filter: "",
          data: this.rawList,
     };

     handleChange = (event) => {
          this.setState({ filter: event.target.value });
     };

     render() {
          const { filter, data } = this.state;
          const lowercasedFilter = filter.toLowerCase();
          const filteredData = data.filter((item) => {
               return Object.keys(item).some((key) =>
                    item[key].toLowerCase().includes(lowercasedFilter.trim())
               );
          });

          const changeToEmbed = ({ url = "" }) => {
               const n = url.replace(/watch\?v=/g, "embed/");
               console.log(n);
               return n;
          };

          const inSearchOfTheEldenRing = (
               <div className={"global-container"}>
                    <input
                         className="search-box"
                         onChange={this.handleChange}
                         value={filter}
                         placeholder={`" Foul Tarnished... In search of the Elden Ring ..."`}
                    />
                    <div className="list-container">
                         {filteredData.map((item) => {
                              return (
                                   <div className={"video-container"}>
                                        <iframe
                                             width="auto"
                                             height="auto"
                                             src={changeToEmbed({ url: item.video })}
                                             style={{ borderRadius: "inherit" }}
                                             title="YouTube video player"
                                             frameborder="0"
                                             className="video-frame"
                                             allow="accelerometer; autoplay=1; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                             allowfullscreen
                                        ></iframe>
                                        <div className="info-container">
                                             <p className="video-title">{item.title}</p>
                                             <a
                                                  href={item.download}
                                                  target="_blank"
                                                  rel="noreferrer"
                                                  style={{
                                                       width: "fit-content",
                                                       alignSelf: "center",
                                                  }}
                                             >
                                                  <img
                                                       className="video-download"
                                                       alt=""
                                                       src={FontAwesomeIcons.Download}
                                                  />
                                             </a>
                                        </div>
                                   </div>
                              );
                         })}
                    </div>
               </div>
          );

          return inSearchOfTheEldenRing;
     }
}

export default FilterableList;
