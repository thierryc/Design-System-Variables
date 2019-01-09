import React, { Component } from "react";
import * as dsv from "./design-system-variables";
import {
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  P,
  PLead,
  Blockquote
} from "./components/Heading";
import { A } from './components/Link';
import { Page, TextContainer } from "./components/Page";
import PageContainer from "./components/PageContainer";
import Variables from "./components/DisplayVariables";
import Switch from "./components/Switch";

import "./App.css";

class App extends Component {
  state = {
    showGrid: true,
    responsiveBackgroundColor: true,
  };

  handleShowGridChange = changeEvent => {
    // toggle
    this.setState(prevState => ({
      showGrid: !prevState.showGrid
    }));
  };

  handleShowResponsiveBackgroundColorChange = changeEvent => {
    // toggle
    this.setState(prevState => ({
      responsiveBackgroundColor: !prevState.responsiveBackgroundColor
    }));
  };

  render() {
    const { showGrid, responsiveBackgroundColor } = this.state;

    return (
      <PageContainer grid={showGrid}>
        <Page showResponsiveBackgroundColor={responsiveBackgroundColor}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "flex-end"
            }}
          >
            <P
              style={{
                marginLeft: `${dsv.SPACER_ONE_THIRD}em`,
                marginRight: `${dsv.SPACER_ONE_THIRD}em`,
              }}
              onClick={this.handleShowResponsiveBackgroundColorChange}
            >
               RWD Background:
            </P>
            <Switch checked={responsiveBackgroundColor} onChange={this.handleShowResponsiveBackgroundColorChange} />
            <P
              style={{
                marginLeft: `${dsv.SPACER_ONE_THIRD}em`,
                marginRight: `${dsv.SPACER_ONE_THIRD}em`,
              }}
              onClick={this.handleShowGridChange}
            >
              Grid: 
            </P>
            <Switch checked={showGrid} onChange={this.handleShowGridChange} />
          </div>

          <TextContainer>
            <H1>Design System Variables</H1>
            <PLead>
              This Consistent Spacing Design System
              Variable set is a <b><A href='http://thinkingwithtype.com/grid/'>Baseline Horizontal grid</A></b> and a <b>Vertical Layout grid</b> drive by
              Rhythm and Typography. A baseline grid is a grid of horizontal
              lines that are evenly spaced across your page.
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
              Blockquote Block: Apparently we had reached a great height in the
              atmosphere, for the sky was a dead black, and the stars had ceased
              to twinkle.
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

            <H2>
              Heading 2 on tow lines, I could see a ruddy light streaming
              through a rift in the clouds.
            </H2>
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
            <H1>Horizontal Grid</H1>
          </TextContainer>


          <TextContainer>
            <H1>Variables</H1>
            <Variables data={dsv} />
          </TextContainer>
        </Page>
      </PageContainer>
    );
  }
}

export default App;
