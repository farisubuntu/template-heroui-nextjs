export interface Welcome {
  Root: Root;
}

export interface Root {
  T1:  R;
  Q:   Q;
  F:   D;
  T1b: The1_B;
  C2b: C2B;
  R:   R;
  L1:  L1;
  D:   D;
  P:   D;
  W1b: C2B;
  Qb:  Qb;
  C1b: The1_B;
  T2:  T2;
  T2b: T2;
}

export interface The1_B {
  id:              number;
  lesson:          number;
  type:            string;
  modifiers:       number;
  wordID:          number;
  alternates:      number[];
  tokens:          C1BToken[];
  tokensEqualSize: boolean;
  ord:             string[];
  completeToken?:  string;
  tokensPhonetic:  C1BToken[];
  sols:            C1BSol[];
}

export interface C1BSol {
  key:               string;
  audio_updated_at?: number;
  text:              string;
  dictionary?:       Dictionary[];
  phraseType?:       number;
  text_tokens?:      Token[];
  phonetic?:         string;
  phonetic_tokens?:  Token[];
  image?:            string;
  image_updated_at?: number;
}

export interface Dictionary {
  raw:          string;
  translations: Translation[];
}

export interface Translation {
  type:        Type;
  text?:       string;
  phonetic?:   null | string;
  name?:       Name;
  id?:         number;
  tenseNames?: TenseNames;
  conj?:       Conj;
}

export interface Conj {
  pr: Fu[];
  pa: Fu[];
  fu: Fu[];
}

export interface Fu {
  t: AltElement;
  m: M;
}

export interface M {
  text: string;
}

export interface AltElement {
  key:               string;
  audio_updated_at?: number;
  text:              string;
  phonetic?:         string;
}

export interface Name {
  t:        string;
  m:        string;
  phonetic: string;
}

export interface TenseNames {
  pr: string;
  pa: string;
  fu: string;
}

export enum Type {
  Dictionary = "dictionary",
  Verb = "verb",
}

export interface Token {
  raw:    Linker;
  prefix: Linker;
  suffix: Linker;
  linker: Linker;
}

export interface Linker {
  text:     string;
  location: number;
  length:   number;
}

export interface C1BToken {
  key:    string;
  text:   string;
  raw:    Linker;
  prefix: Linker;
  suffix: Linker;
  linker: Linker;
}

export interface C2B {
  id:              number;
  lesson:          number;
  type:            string;
  modifiers:       number;
  wordID:          number;
  alternates:      number[];
  tokens:          C2BToken[];
  tokensEqualSize: boolean;
  ord:             string[];
  tokensPhonetic:  C2BToken[];
  ordPhonetic:     string[];
  sols:            C1BSol[];
}

export interface C2BToken {
  key:          string;
  text:         string;
  group?:       number;
  specialChar?: boolean;
}

export interface D {
  id:         number;
  lesson:     number;
  type:       string;
  modifiers:  number;
  wordID:     number;
  alternates: number[];
  sols:       AltElement[];
  alts:       Alt[];
}

export interface Alt {
  key:              string;
  audio_updated_at: number;
  image:            string;
  image_updated_at: number;
  text:             string;
  phonetic:         string;
}

export interface L1 {
  id:              number;
  lesson:          number;
  type:            string;
  modifiers:       number;
  wordID:          number;
  alternates:      any[];
  tokens:          C1BToken[];
  tokensEqualSize: boolean;
  ord:             string[];
  sols:            AltElement[];
}

export interface Q {
  id:         number;
  lesson:     number;
  type:       string;
  modifiers:  number;
  wordID:     number;
  alternates: number[];
  sols:       RSol[];
  alts:       AltElement[];
}

export interface RSol {
  key:               string;
  audio_updated_at?: number;
  text:              string;
  phonetic?:         string;
  dictionary?:       Dictionary[];
  phraseType?:       number;
  text_tokens?:      Token[];
  phonetic_tokens?:  Token[];
}

export interface Qb {
  id:         number;
  lesson:     number;
  type:       string;
  modifiers:  number;
  wordID:     number;
  alternates: number[];
  sols:       C1BSol[];
  alts:       AltElement[];
}

export interface R {
  id:              number;
  lesson:          number;
  type:            string;
  modifiers:       number;
  wordID:          number;
  alternates:      any[];
  tokens:          C1BToken[];
  tokensEqualSize: boolean;
  ord:             string[];
  sols:            RSol[];
  quizSkipData?:   QuizSkipData;
}

export interface QuizSkipData {
  type:            string;
  modifiers:       number;
  tokens:          C1BToken[];
  tokensEqualSize: boolean;
  ord:             string[];
  sols:            C1BSol[];
}

export interface T2 {
  id:         number;
  lesson:     number;
  type:       string;
  modifiers:  number;
  wordID:     number;
  alternates: any[];
  sols:       C1BSol[];
}
