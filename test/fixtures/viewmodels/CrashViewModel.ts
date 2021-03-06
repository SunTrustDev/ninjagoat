import ObservableViewModel from "../../../scripts/observable/ObservableViewModel";
import {ViewModel} from "../../../scripts/viewmodels/ViewModelDecorator";

@ViewModel("Crash")
export default class CrashViewModel extends ObservableViewModel<number> {

    onData(model: number) {
        throw new Error();
    }
}
