import { createContext, useEffect, useState } from 'react';

type TFeature = {
	[key: string]: boolean;
};

type InitialState = {
	features: TFeature | null;
	loading: boolean;
	getFeatureState: (value: string) => boolean;
};

export const FeatureContext = createContext({} as InitialState);

export const FeatureProvider = ({ children }: { children: JSX.Element }) => {
	const [features, setFeatures] = useState<TFeature | null>(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetchAllFeatures().then((data) => {
			console.log(data);
			setFeatures(data);
			setLoading(false);
		});
	}, []);

	// returns the state of *all* features for current user
	function fetchAllFeatures(): Promise<TFeature> {
		// in reality, this would have been a `fetch` call:
		// `fetch("/api/features/all")`
		return new Promise((resolve) => {
			const sampleFeatures: TFeature = {
				'extended-summary': false,
				'feedback-dialog': true,
			};
			setTimeout(resolve, 1000, sampleFeatures);
		});
	}

  function getFeatureState(featureName: string): boolean {
    if(features && featureName in features) {
      return features[featureName];
    }

    return false
  }

	return (
		<FeatureContext.Provider value={{ features, loading, getFeatureState }}>{children}</FeatureContext.Provider>
	);
};
