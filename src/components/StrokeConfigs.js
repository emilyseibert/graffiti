import React from "react";
import { connect } from "react-redux";
import Colorpicker from "./Colorpicker";
import StrokeOpacity from "./StrokeOpacity";

const StrokeConfigs = ({ strokeConfigs }) => {
  return (
    <div className="mb-3">
      <Colorpicker color={strokeConfigs.color} />
      <StrokeOpacity opacity={strokeConfigs.opacity} />
    </div>
  );
};

const mapStateToProps = (state, props) => ({
  strokeConfigs: state.strokeConfigs,
});

const mapDispatchToProps = (dispatch, ownProps) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(StrokeConfigs);
