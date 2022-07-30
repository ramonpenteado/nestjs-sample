import { PowerStats } from "./powerstats.type";
import { Appearance } from "./appearance.type";
import { Biography } from "./biography.type";
import { Connections } from "./connections.type";
import { Work } from "./work.type";
import { Images } from "./images.type";

export interface Hero {
    id: number;
    name: string;
    slug: string;
    powerstats: PowerStats;
    biography: Biography;
    appearance: Appearance;
    work: Work;
    connections: Connections;
    image: Images;
}