import React, { Component, Fragment } from "react";
import * as dsv from "./design-system-variables";
import { H1, H2, H3, H4, H5, H6, P } from "./components/Heading";
import { Page, TextContainer } from "./components/Page";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Page>
          <TextContainer>
            <H1>Design System Variables</H1>
            <P>
              Apparently we had reached a great height in the atmosphere, for
              the sky was a dead black, and the stars had ceased to twinkle. By
              the same illusion which lifts the horizon of the sea to the level
              of the spectator on a hillside, the sable cloud beneath was dished
              out, and the car seemed to float in the middle of an immense dark
              sphere, whose upper half was strewn with silver. Looking down into
              the dark gulf below, I could see a ruddy light streaming through a
              rift in the clouds.
            </P>

            <H1>HO Heading one two line. HO Heading one two line. é è à...</H1>
            <P>
              Apparently we had reached a great height in the atmosphere, for
              the sky was a dead black, and the stars had ceased to twinkle. By
              the same illusion which lifts the horizon of the sea to the level
              of the spectator on a hillside, the sable cloud beneath was dished
              out, and the car seemed to float in the middle of an immense dark
              sphere, whose upper half was strewn with silver. Looking down into
              the dark gulf below, I could see a ruddy light streaming through a
              rift in the clouds.
            </P>

            <H2>Variables sub-heading</H2>
            <P>
              Apparently we had reached a great height in the atmosphere, for
              the sky was a dead black, and the stars had ceased to twinkle. By
              the same illusion which lifts the horizon of the sea to the level
              of the spectator on a hillside, the sable cloud beneath was dished
              out, and the car seemed to float in the middle of an immense dark
              sphere, whose upper half was strewn with silver. Looking down into
              the dark gulf below, I could see a ruddy light streaming through a
              rift in the clouds.
            </P>

            <H3>Variables sub-heading</H3>
            <P>
              Apparently we had reached a great height in the atmosphere, for
              the sky was a dead black, and the stars had ceased to twinkle. By
              the same illusion which lifts the horizon of the sea to the level
              of the spectator on a hillside, the sable cloud beneath was dished
              out, and the car seemed to float in the middle of an immense dark
              sphere, whose upper half was strewn with silver. Looking down into
              the dark gulf below, I could see a ruddy light streaming through a
              rift in the clouds.
            </P>

            <H4>Variables sub-heading</H4>
            <P>
              Apparently we had reached a great height in the atmosphere, for
              the sky was a dead black, and the stars had ceased to twinkle. By
              the same illusion which lifts the horizon of the sea to the level
              of the spectator on a hillside, the sable cloud beneath was dished
              out, and the car seemed to float in the middle of an immense dark
              sphere, whose upper half was strewn with silver. Looking down into
              the dark gulf below, I could see a ruddy light streaming through a
              rift in the clouds.
            </P>

            <H5>Variables sub-heading</H5>
            <P>
              Apparently we had reached a great height in the atmosphere, for
              the sky was a dead black, and the stars had ceased to twinkle. By
              the same illusion which lifts the horizon of the sea to the level
              of the spectator on a hillside, the sable cloud beneath was dished
              out, and the car seemed to float in the middle of an immense dark
              sphere, whose upper half was strewn with silver. Looking down into
              the dark gulf below, I could see a ruddy light streaming through a
              rift in the clouds.
            </P>

            <H6>Variables sub-heading</H6>
            <P>
              Apparently we had reached a great height in the atmosphere, for
              the sky was a dead black, and the stars had ceased to twinkle. By
              the same illusion which lifts the horizon of the sea to the level
              of the spectator on a hillside, the sable cloud beneath was dished
              out, and the car seemed to float in the middle of an immense dark
              sphere, whose upper half was strewn with silver. Looking down into
              the dark gulf below, I could see a ruddy light streaming through a
              rift in the clouds.
            </P>
          </TextContainer>
        </Page>
        <code>
          <pre>{JSON.stringify(dsv, null, 4)}</pre>
        </code>
      </Fragment>
    );
  }
}

export default App;
