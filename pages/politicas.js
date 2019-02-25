import React from "react";

//import tamplate head, header, footer
import Layout from "../layout/layout";
import Collapsible from "react-collapsible";

import background from "../assets/background-smartbank.svg.raw";
import Modernizr from "modernizr";

// Collapsible.props = {
//   open: true,
//   classParentString: "Collapsible",
//   triggerDisabled: false,
//   lazyRender: false,
//   overflowWhenOpen: "hidden",
//   openedClassName: "",
//   triggerStyle: null,
//   triggerClassName: "",
//   triggerOpenedClassName: "",
//   contentOuterClassName: "",
//   contentInnerClassName: "",
//   className: "",
//   triggerSibling: null,
//   onOpen: () => {},
//   onClose: () => {},
//   onOpening: () => {},
//   onClosing: () => {},
//   tabIndex: null
// };

class Politicas extends React.Component {
  render() {
    return (
      <Layout>
        <section className="policies">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h1>Politícas</h1>
                <p>ta e trata suas informações individuais. Estas</p>
                <Collapsible
                  trigger="Garantias, Responsabilidades e Danos."
                  triggerTagName="h2"
                  contentContainerTagName="div"
                  transitionTime="300"
                  easing="ease-in-out"
                  open="true"
                  triggerSibling="true"
                >
                  <p>
                    This is the collapsible content. It can be any element or
                    React component you like.
                  </p>
                  <p>
                    It can even be another Collapsible component. Check out the
                    next section!
                  </p>
                  <p>
                    It can even be another Collapsible component. Check out the
                    next section!
                  </p>
                  <p>
                    It can even be another Collapsible component. Check out the
                    next section!
                  </p>
                </Collapsible>
                <Collapsible
                  trigger="Garantias, Responsabilidades e Danos."
                  triggerTagName="h2"
                  contentContainerTagName="div"
                  transitionTime="300"
                  easing="ease-in-out"
                  open="true"
                  triggerSibling="true"
                >
                  <p>
                    This is the collapsible content. It can be any element or
                    React component you like.
                  </p>
                  <p>
                    It can even be another Collapsible component. Check out the
                    next section!
                  </p>
                  <p>
                    It can even be another Collapsible component. Check out the
                    next section!
                  </p>
                  <p>
                    It can even be another Collapsible component. Check out the
                    next section!
                  </p>
                </Collapsible>
              </div>
            </div>
          </div>
        </section>
        <div className="bg" dangerouslySetInnerHTML={{ __html: background }} />
      </Layout>
    );
  }
}

export default Politicas;
