import React from "react";
import SHOP_DATA from "../../components/SHOP-LIST";
import PreviewColection from "../../components/preview-collection/prewiev-collection";
class ShopPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collection: SHOP_DATA
    };
  }
  render() {
    return (
      <div className="container">
        {this.state.collection.map(({ id, ...otherCollectionProps }) => {
          return (
            <div key={id}>
              <PreviewColection key={id} {...otherCollectionProps} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default ShopPage;
