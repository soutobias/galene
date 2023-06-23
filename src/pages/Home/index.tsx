import { MapHome } from '../../components/MapHome'
import { RangeSelection } from '../../components/RangeSelection'
import { SideSelection } from '../../components/SideSelection'
import { BottomBar, HomeContainer, SideBar, TopRightBar } from './styles'
import { useState } from 'react'
import { DepthSelection } from '../../components/DepthSelection'
import { ColorBar } from '../../components/ColorBar'
import { yearMonths } from '../../data/yearMonths'

export function Home() {
  const [selectedLayers, setSelectedLayers] = useState('')
  const [actualLayer, setActualLayer] = useState('')
  const [actualDate, setActualDate] = useState(yearMonths.indexOf('2021-05'))
  const [actualDepth, setActualDepth] = useState('1.0')
  const [layerAction, setLayerAction] = useState('')

  const [colorLegend, setColorLegend] = useState(null)

  const [modelTarget, setModelTarget] = useState('')

  const [extension, setExtension] = useState('')

  return (
    <HomeContainer>
      <SideBar>
        <SideSelection
          selectedLayers={selectedLayers}
          setSelectedLayers={setSelectedLayers}
          actualLayer={actualLayer}
          setActualLayer={setActualLayer}
          layerAction={layerAction}
          setLayerAction={setLayerAction}
          modelTarget={modelTarget}
          setModelTarget={setModelTarget}
          extension={extension}
          setExtension={setExtension}
          setColorLegend={setColorLegend}
        />
      </SideBar>
      <BottomBar>
        {selectedLayers ? (
          <RangeSelection
            actualDate={actualDate}
            setActualDate={setActualDate}
            setLayerAction={setLayerAction}
            setActualLayer={setActualLayer}
            selectedLayers={selectedLayers}
            extension={extension}
          />
        ) : null}
      </BottomBar>
      <TopRightBar>
        {colorLegend ? (
          <>
            <DepthSelection
              actualDepth={actualDepth}
              setActualDepth={setActualDepth}
              setLayerAction={setLayerAction}
              setActualLayer={setActualLayer}
              selectedLayers={selectedLayers}
            ></DepthSelection>
            <ColorBar
              colorLegend={colorLegend}
              selectedLayers={selectedLayers}
            />
          </>
        ) : null}
      </TopRightBar>
      <MapHome
        selectedLayers={selectedLayers}
        actualLayer={actualLayer}
        actualDate={actualDate}
        layerAction={layerAction}
        setLayerAction={setLayerAction}
        actualDepth={actualDepth}
        setColorLegend={setColorLegend}
        modelTarget={modelTarget}
      />
    </HomeContainer>
  )
}
