import useCachedResources from 'hooks/useCachedResources';
import useColorScheme from 'hooks/useColorScheme';
import Navigation from 'navigation';
import { Provider } from 'react-redux';
import { store } from 'redux_toolkit/store';

export default function App() {
    const isLoadingComplete = useCachedResources();
    const colorScheme = useColorScheme();

    if (!isLoadingComplete) {
        return null;
    } else {
        return (
            <Provider store={store}>
                <Navigation colorScheme={colorScheme} />
            </Provider>
        );
    }
}
