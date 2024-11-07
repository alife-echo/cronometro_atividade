import { StatusBar } from "expo-status-bar";
import moment from "moment";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

export default function App() {
  const [pastTime, setPastTime] = useState(0);
  const [startedTime, setStaredTime] = useState(false);
  const [storageLastTime,setStorageLastTime] = useState(0)
  const clearTimeStopWatch = () => {
    clearInterval(this.interval);
    setStorageLastTime(pastTime)
    setPastTime(0)
    setStaredTime(false);
  };

  const pauseStopWatch = () => {
    if (startedTime) {
      setStaredTime(false)
    }
  };
  const EventPlaystopwatch = () => {
    if(!startedTime){
       setStaredTime(true)
    }
  };

console.log(moment.utc(pastTime * 1000).format("HH:mm:ss"))
  useEffect(() => {
    let interval
    EventPlaystopwatch()
    if (startedTime) {
     
      interval = setInterval(() => {
        setPastTime(timeBefore => timeBefore + 1);
      }, 1000);
    } 
    else{
       clearInterval(interval)
    }
    return () => clearInterval(interval);
  }, [startedTime]);
  return (
    <View style={styles.container}>
      <View style={styles.adjustContents}>
        <Image source={require("./assets/cronometro.png")}></Image>
        <Text style={styles.time}>
          {moment.utc(pastTime * 1000).format("HH:mm:ss")}
        </Text>
      </View>

      <View style={styles.containerButtons}>
        <TouchableOpacity style={styles.botao} onPress={pauseStopWatch}>
          <View style={styles.btnArea}>
            <Text style={styles.btnTexto}>Parar</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao} onPress={clearTimeStopWatch}>
          <View style={styles.btnArea}>
            <Text style={styles.btnTexto}>Limpar</Text>
          </View>
        </TouchableOpacity>
      </View>
      <Text style={styles.lastTime}>Ultimo tempo:{moment.utc(storageLastTime * 1000).format("HH:mm:ss")}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4287f5",
    alignItems: "center",
    justifyContent: "center",
  },
  lastTime: {
    marginTop: 20,
    color: "white",
    fontSize: 25,
  },
  botao: {
    width: 150,
    marginTop: 50,
    margin: 10,
    height: 50,
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 25,
  },
  btnArea: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  btnTexto: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  containerButtons: {
    display: "flex",
    flexDirection: "row",
  },
  adjustContents: {
    alignItems: "center",
    justifyContent: "center",
  },
  time: {
    bottom: 125,
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
});
