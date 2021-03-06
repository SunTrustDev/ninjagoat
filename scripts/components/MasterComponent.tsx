import { interfaces } from "inversify";
import * as React from "react";
import { IObservable } from "rx";

import * as Area from "../registry/Area";
import View from "../views/View";
import IContextFactory from "./IContextFactory";

export interface IMasterComponentProps {
    contextFactory: IContextFactory;
    params?: any;
}

class MasterComponent extends React.Component<IMasterComponentProps> {
    viewmodel: IObservable<any>;
    view: interfaces.Newable<View<any>>;

    componentWillMount() {
        let context = this.props.contextFactory.contextFor(Area.Master);
        this.view = context.view;
        this.viewmodel = context.viewmodel;
        this.setState(this.viewmodel);

        this.viewmodel.subscribe(() => this.setState(context.viewmodel));
    }

    render() {
        let ViewComponent = this.view;
        let ViewModel = this.viewmodel;
        return <ViewComponent viewmodel={ViewModel} children={this.props.children} />;
    }
}

export default MasterComponent;
