import React from "react";

import { CodeLikeBlock, Kw, Sl, Br, Fn, L } from "~/components/CodeLikeBlock";
import { GoogleMap } from "~/components/GoogleMap";
import { LinkLine } from "~/components/LinkLine";
import { IfHirable, IfNotHirable } from "~/components/IfHirable";

import { useStyles } from "./Contacts.styles";

export const Contacts: React.FC = () => {
  const classes = useStyles();
  return (
    <CodeLikeBlock>
      <L>
        <Kw>Currently</Kw> I live in <Sl>Delhi</Sl>, India.
      </L>
      <IfHirable>
        <L active git="green">
          <Kw>But</Kw> I definitely consider <Fn>remote</Fn> work.
        </L>
      </IfHirable>
      <IfNotHirable>
        <L git="blue">
          <Kw>I lived</Kw> in <Sl>Calcutta</Sl> for several months for my MBA,
          but decided to return back to Delhi, my hometown.
        </L>
      </IfNotHirable>

      <Br />

      <div className={classes.mapWrapper}>
        <L className={classes.map}>
          <GoogleMap address="Delhi" title="My Location" />
        </L>

        <div className={classes.contactInfo}>
          <LinkLine label="E-mail" to="mailto:k72.lakshay@gmail.com" external>
            k72.lakshay@gmail.com
          </LinkLine>
          <LinkLine
            label="LinkedIn"
            to="https://www.linkedin.com/in/lakshaynagpal/"
            hasLinkIcon
            external
          >
            Lakshay Nagpal
          </LinkLine>
          <LinkLine
            label="GitHub"
            to="https://github.com/LakshayNagpal"
            hasLinkIcon
            external
          >
            LakshayNagpal
          </LinkLine>
          <Br />
        </div>
      </div>
    </CodeLikeBlock>
  );
};

export default Contacts;
