import { useContext } from "react"
import { FeatureContext } from "../App.context"

export const ExtendedSummary = () => {
  const {getFeatureState} = useContext(FeatureContext);

  if(!getFeatureState('extended-summary')) {
    return <p>Access Denied</p>
  }

  return (
    <div>ExtendedSummary</div>
  )
}
