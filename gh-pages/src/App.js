import React, { Component, Fragment } from "react";
import * as dsv from "./design-system-variables";
import { H1, H2, H3, H4, H5, H6, P, PLead, Blockquote } from "./components/Heading";
import { Page, TextContainer } from "./components/Page";
import Variables from './components/DisplayVariables';

import "./App.css";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Page>
          <TextContainer>
            <H1>Design System Variables</H1>
            <PLead>
              Apparently we had reached a great height in the atmosphere, for
              the sky was a dead black, and the stars had ceased to twinkle. By
              the same illusion which lifts the horizon of the sea to the level
              of the spectator on a hillside, the sable cloud beneath was dished
              out, and the car seemed to float in the middle of an immense dark
              sphere, whose upper half was strewn with silver.
            </PLead>

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

            <H1>Heading 1 on two line. Heading on two line... é è à...</H1>
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
            <Blockquote>
              Apparently we had reached a great height in the atmosphere, for
              the sky was a dead black, and the stars had ceased to twinkle.
            </Blockquote>
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

            <H2>Heading 2 on tow lines, I could see a ruddy light streaming through a
              rift in the clouds.</H2>
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

            <H3>Heading 3 sub-heading</H3>
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

            <H4>Heading 4 sub-heading</H4>
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

            <H5>Heading 5 sub-heading</H5>
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

            <H6>Heading 6 sub-heading</H6>
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
          <TextContainer>
            <H1>Variables</H1>
            <Variables data={dsv}/>
          </TextContainer>
        </Page>
      </Fragment>
    );
  }
}

export default App;
