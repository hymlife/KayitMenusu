

import React ,{Component} from 'react';

import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';

import {createAppContainer} from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { State } from 'react-native-gesture-handler';






//Anasayfa için yapılan bölüm
 class App extends React.Component{

  


  render(){
    return(

    <View style={{alignItems:'center',paddingTop:25,flex:1,justifyContent:'center',backgroundColor:'#90caf9'}}>
      <View style={{flex:1}}>
        <Text style={{fontSize:30,fontFamily:'Montserrat-ExtraBoldItalic'}}>KARMA'ya Hoşgeldiniz</Text>

      </View>


      <View style={{flex:1}}>

        <TouchableOpacity
          style={{borderWidth:0,borderRadius:15,padding:15,backgroundColor:'#bbdefb'}}

          onPress = {()=> this.props.navigation.navigate('BilgiGuncelle')}


        >
          <Text style={{fontSize:25,fontFamily:'Montserrat-Italic'}}>
            Bilgi Güncelleme
          </Text>
        </TouchableOpacity>


      </View>




      <View style={{flex:1}}>

        <TouchableOpacity

          style={{borderWidth:0,borderRadius:15,padding:15,backgroundColor:'#bbdefb'}}
          onPress={()=>this.props.navigation.navigate('BilgiKontrol')}
        >
          <Text style={{fontSize:25,fontFamily:'Montserrat-Italic'}}>Bilgi Görüntüleme </Text>
        </TouchableOpacity>


      </View>

    </View>

    )
  }
}
//Bilgi Güncelleme Bölümünde bulunan kodlar için oluşturulan bölge
class GetInformation extends React.Component{


 

   render() {

     return(



       <View style={{alignItems:'center',flex:1,backgroundColor:'#90caf9'}}>

         <View style={{flex:1,marginTop:35}}>
             <Text style={{fontSize:25,fontFamily:'Montserrat-ExtraBoldItalic'}}>
               BİLGİLERİ GÜNCELLEYİNİZ
             </Text>
         </View>



         <View style={{flex:1}}>
            <Text style={{fontSize:20,fontFamily:'Montserrat-Italic'}}>
              Doğum Gününüzü Giriniz
            </Text>
           <TextInput
             style={{backgroundColor:'#bbdefb',margin:15,borderWidth:1,borderRadius:15,borderWidth:0}}
           placeholder={'28.09.2000'}
           keyboardType='numeric'
           
           />


         </View>


         <View style={{flex:1}}>
           <Text style={{fontSize:20,fontFamily:'Montserrat-Italic'}}>
             Doğum Saatini Giriniz
           </Text>

           <TextInput
             style={{backgroundColor:'#bbdefb',margin:15,borderWidth:1,borderRadius:15,borderWidth:0}}
             placeholder={'06.00'}
             keyboardType='numeric'
             
           />

         </View>


         <View style={{flex:1}}>
           <Text style={{fontSize:20,fontFamily:'Montserrat-Italic'}}>
             Doğduğunuz Şehri Giriniz
           </Text>

           <TextInput
             style={{backgroundColor:'#bbdefb',margin:15,borderWidth:1,borderRadius:15,borderWidth:0}}
             placeholder={'Ağrı'}
             
           />
         </View>

         <View style={{flex:1}}>
           <TouchableOpacity
             style={{borderWidth:0,borderRadius:15,padding:15,backgroundColor:'#bbdefb'}}

             onPress = {()=> this.props.navigation.navigate('AnaSayfa')}


           >
             <Text style={{fontSize:25,fontFamily:'Montserrat-SemiBoldItalic'}}>Kaydet ve Anasayfaya Dön</Text>
           </TouchableOpacity>
         </View>



       </View>
     );
   }
}
//Bilgi Görüntüleme Bölümünde bulunan kodlar için oluşturulan bölge
class ReadInformation extends React.Component{
  render() {
    return(
      <View style={{flex:1}}>



        <View style={{alignItems:'center',flex:1}}>
            <Text>
              BİLGİLERİNİZ
            </Text>
        </View>

        <View style={{alignItems:'center',flex:1}}>
          <Text>
            Doğum Gününüz
          </Text>

          <Text >
            
          </Text>
        </View>



        <View style={{alignItems:'center',flex:1}}>

          <Text>
            Doğum Saatiniz
          </Text>

          <Text>
           
          </Text>


        </View>




        <View style={{alignItems:'center',flex:1}}>

          <Text>
            Doğduğunuz Şehir
          </Text>

          <Text>
            
          </Text>


        </View>

        <View>

        <TouchableOpacity
             style={{borderWidth:0,borderRadius:15,padding:15,backgroundColor:'#bbdefb',alignItems:'center'}}

             onPress = {()=> this.props.navigation.navigate('AnaSayfa')}


           >
             <Text style={{fontSize:25,fontFamily:'Montserrat-SemiBoldItalic'}}>Kaydet ve Anasayfaya Dön</Text>
           </TouchableOpacity>

        </View>



      </View>
    );
  }
}



const AppNavigator =createStackNavigator({
  AnaSayfa: {
    screen:App,
    navigationOptions:{
      header:null
    }
  },
  BilgiGuncelle:{
    screen: GetInformation,
    navigationOptions:{
      header:null
    }
  },
  BilgiKontrol:{
    screen: ReadInformation,
    navigationOptions:{
      header:null
    }
  }
});

export default createAppContainer(AppNavigator);
