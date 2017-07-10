
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { StockLine } from 'react-native-pathjs-charts'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
});

//const newData = {this.props.graphing};

class StockLineChartBasic extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `StockLine - Basic`,
  });
  render() {
    //var newData = {this.props.graphing};
    let data = [
      [{
        "x": 0,
        "y": 132189
      }, {
        "x": 1,
        "y": 61705
      }],
    ]
    let options = {
      width: 300,
      height: 250,
      color: '#52c4a5',
      margin: {
        top: 10,
        left: 35,
        bottom: 30,
        right: 10
      },
      animate: {
        type: 'delayed',
        duration: 200
      },
      axisX: {
        showAxis: true,
        showLines: false,
        showLabels: false,
        showTicks: false,
        zeroAxis: false,
        orient: 'bottom',
        tickValues: [],
        label: {
          fontFamily: 'Arial',
          fontSize: 8,
          fontWeight: true,
          fill: '#34495E'
        }
      },
      axisY: {
        showAxis: true,
        showLines: true,
        showLabels: true,
        showTicks: true,
        zeroAxis: false,
        orient: 'left',
        tickValues: [],
        label: {
          fontFamily: 'Arial',
          fontSize: 8,
          fontWeight: true,
          fill: '#34495E'
        }
      }
    }
    console.log(data)

    return (
      <View style={styles.container}>
        <Text>

        </Text>
        <StockLine data={this.props.graphing} options={options} xKey='x' yKey='y' />
      </View>
    )
  }
}

export default StockLineChartBasic;
