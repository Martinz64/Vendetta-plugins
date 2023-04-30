import { patcher } from "@vendetta";
import { findByDisplayName, findByName, findByProps, findByStoreName } from "@vendetta/metro";
import {General} from "@vendetta/ui/components"
import { findInReactTree } from "@vendetta/utils";
import StatusIcons from "./StatusIcons";
import { getAssetByName, getAssetIDByName } from "@vendetta/ui/assets";

const {Text,View } = General;

let unpatches = [];


export default {
    onLoad: () => {

        //spagetti code ahead

        const Pressable = findByDisplayName("Pressable",false); //importing from ReactNative doesn't work
        unpatches.push(patcher.before("render",Pressable.default.type,(args)=>{
            if(!args) return;
            if(!args[0]) return;
            const [ props ] = args;
            if(!props) return;
            if(props.accessibilityRole == "button"){
                if(props.children){
                    if(props.children.length >= 2){
                        if(props.children[0]?.props?.user){
                            //console.log(props.children[0]?.props?.user?.id)
                            const uid = props.children[0]?.props?.user?.id

                            if(!uid) return;

                            //window.uuu = props
                            if(!props.children.find(m => m.key == "StatusIcons")){
                                props.children.push(
                                    <View 
                                        key="StatusIcons"
                                        style={{
                                            display: 'flex',
                                    flexDirection: 'row'}}></View>
                                )
                            }
                            const icons = props.children.find(m => m.key == "StatusIcons");                            
                            icons.props.children = <StatusIcons userId={uid}/>
                        }
                    }
                }
            }

            if(props.accessibilityRole == "header"){
                //non tabs v2 dm header

                //window.hhhh = props.children
                if(findInReactTree(props.children,m => m.props?.title && m.props?.icon)){
                    const header = findInReactTree(props.children,m => m.props?.title && m.props?.icon);
                    if(header.props?.titleSuffix){
                        if(!findInReactTree(header.props.titleSuffix,m => m.key == "DMStatusIndicators")){
                            //props.children.props.title =
                            header.props.titleSuffix =
                            [
                                header.props.titleSuffix,
                                <View 
                                    key="DMStatusIndicators"
                                    style={{
                                        flexDirection: "row"
                                    }}></View>
                            ]
                        }
                        const userId = findInReactTree(header.props.titleSuffix,m => m.props?.userId).props?.userId;
                        if(userId){
                            const DMStatusIndicators = findInReactTree(header.props.titleSuffix,m => m.key == "DMStatusIndicators")
                            if(DMStatusIndicators){
                                DMStatusIndicators.props.children = <StatusIcons userId={userId}/>
                            }
                        }
                    }
                }
            }
        }));
        

        const PresenceStore = findByStoreName("PresenceStore");
        unpatches.push(patcher.after("type",findByProps("DirectMessageRow").DirectMessageRow,(args,res) => {
            //window.dmr =res
            const userId = res.props?.user?.id

            if(!userId) return;

            patcher.after("type",res,(args,res) => {
                //console.log("DMR",res)

                //tabs v2 dm list indicators
                const comp = findInReactTree(res,m => m.props?.children[0]?.type?.displayName == "View")
                //window.comp1 = comp.props.children[0]
                comp.props.children[0].props.children[0] = <View style={{
                    flexDirection: 'row'
                }}>
                    {comp.props.children[0].props.children[0]}
                    <View style={{
                        marginLeft: 2,
                        flexDirection: 'row'
                    }}>
                        <StatusIcons userId={userId}/>
                    </View>
                    
                </View>
            })
        }));

        //tabs v2 dm header
        unpatches.push(patcher.after("default",findByName("ChannelHeader",false),(args,res) => {
            //window.ch = res
            if(!(res.type?.type?.name == "PrivateChannelHeader")) return;

            patcher.after("type",res.type,(args,res) => {
                if(!res.props?.children?.props?.children) return;
                const userId = findInReactTree(res,m => m.props?.user?.id)?.props?.user?.id
                if(!userId) return;
                
                const dmTopBar = res.props?.children
                if(!findInReactTree(res,m => m.key == "DMTabsV2Header")){

                    //note to self: don't hardcode asset ids
                    const arrowId = getAssetIDByName("arrow-right");
                    const container1 = findInReactTree(dmTopBar, m => m.props?.children[1]?.props?.source == arrowId)

                    container1.props?.children?.push(<View 
                        key="DMTabsV2Header"    
                        style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignContent: 'flex-start'
                    }}>
                        <View 
                            key="DMTabsV2HeaderIcons"
                            style={{
                                flexDirection: 'row'
                            }}></View>
                    </View>)

                }
                const topIcons = findInReactTree(res,m => m.key == "DMTabsV2HeaderIcons")
                if(topIcons){
                    topIcons.props.children = <StatusIcons userId={userId}/>
                }
                

            })
        }));

        //icons on profile
        //might explode in a future update
        const DefaultName = findByName("DefaultName", false);
        unpatches.push(patcher.after("default", DefaultName, (args, res) => {
            const user = args[0]?.user;
            if (user === undefined) return;
            if(!res) return;
            if(!user.id) return;
            res.props?.children[0]?.props?.children?.push(<StatusIcons userId={user.id}/>)
        }));


        },
    onUnload: () => {
        unpatches.forEach(u => u());

    },
}