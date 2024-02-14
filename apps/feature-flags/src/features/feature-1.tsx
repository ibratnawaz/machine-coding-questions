import { useContext } from "react";
import { FeatureContext } from "../App.context";

export const FeedbackDialog = () => {
  const {getFeatureState} = useContext(FeatureContext);

  if(!getFeatureState('feedback-dialog')) {
    return <p>Access Denied</p>
  }

  return (
    <div>FeedbackDialog</div>
  )
}
