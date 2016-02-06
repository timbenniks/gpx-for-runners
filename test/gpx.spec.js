var expect = chai.expect;
var gpxContent = '<?xml version="1.0" encoding="UTF-8"?><gpx version="1.1" creator="Garmin Connect" xsi:schemaLocation="http://www.topografix.com/GPX/1/1 http://www.topografix.com/GPX/1/1/gpx.xsd http://www.garmin.com/xmlschemas/GpxExtensions/v3 http://www.garmin.com/xmlschemas/GpxExtensionsv3.xsd http://www.garmin.com/xmlschemas/TrackPointExtension/v1 http://www.garmin.com/xmlschemas/TrackPointExtensionv1.xsd" xmlns="http://www.topografix.com/GPX/1/1" xmlns:gpxtpx="http://www.garmin.com/xmlschemas/TrackPointExtension/v1" xmlns:gpxx="http://www.garmin.com/xmlschemas/GpxExtensions/v3" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"><metadata><link href="connect.garmin.com"><text>Garmin Connect</text></link><time>2015-08-03T19:07:54.000Z</time></metadata><trk><name>Paris 14 Running</name><trkseg><trkpt lon="2.3212804924696684" lat="48.83561119437218"><ele>73.0</ele><time>2015-08-03T19:07:54.000Z</time></trkpt><trkpt lon="2.3212731163948774" lat="48.83561563678086"><ele>73.0</ele><time>2015-08-03T19:07:55.000Z</time></trkpt><trkpt lon="2.321215197443962" lat="48.835627203807235"><ele>73.0</ele><time>2015-08-03T19:07:57.000Z</time></trkpt><trkpt lon="2.321181669831276" lat="48.83560725487769"><ele>72.80000305175781</ele><time>2015-08-03T19:07:58.000Z</time></trkpt><trkpt lon="2.3209541849792004" lat="48.83550340309739"><ele>72.4000015258789</ele><time>2015-08-03T19:08:06.000Z</time></trkpt><trkpt lon="2.3207608982920647" lat="48.83535127155483"><ele>71.5999984741211</ele><time>2015-08-03T19:08:13.000Z</time></trkpt><trkpt lon="2.3205566313117743" lat="48.83519880473614"><ele>70.4000015258789</ele><time>2015-08-03T19:08:20.000Z</time></trkpt><trkpt lon="2.320321686565876" lat="48.8351022452116"><ele>69.5999984741211</ele><time>2015-08-03T19:08:27.000Z</time></trkpt><trkpt lon="2.3200821317732334" lat="48.83499663323164"><ele>68.80000305175781</ele><time>2015-08-03T19:08:35.000Z</time></trkpt><trkpt lon="2.319876104593277" lat="48.83487115614116"><ele>68.19999694824219</ele><time>2015-08-03T19:08:41.000Z</time></trkpt><trkpt lon="2.3196549899876118" lat="48.834759928286076"><ele>68.19999694824219</ele><time>2015-08-03T19:08:47.000Z</time></trkpt><trkpt lon="2.3194086458534002" lat="48.834622045978904"><ele>68.19999694824219</ele><time>2015-08-03T19:08:54.000Z</time></trkpt><trkpt lon="2.3192044626921415" lat="48.8344893604517"><ele>68.19999694824219</ele><time>2015-08-03T19:09:00.000Z</time></trkpt><trkpt lon="2.3189721163362265" lat="48.83437067270279"><ele>68.19999694824219</ele><time>2015-08-03T19:09:07.000Z</time></trkpt><trkpt lon="2.3187568690627813" lat="48.83426078595221"><ele>68.80000305175781</ele><time>2015-08-03T19:09:14.000Z</time></trkpt><trkpt lon="2.3185184877365828" lat="48.83417076431215"><ele>69.19999694824219</ele><time>2015-08-03T19:09:21.000Z</time></trkpt><trkpt lon="2.318318746984005" lat="48.83404528722167"><ele>69.80000305175781</ele><time>2015-08-03T19:09:29.000Z</time></trkpt><trkpt lon="2.318076593801379" lat="48.833944369107485"><ele>69.80000305175781</ele><time>2015-08-03T19:09:36.000Z</time></trkpt><trkpt lon="2.3179065249860287" lat="48.83381704799831"><ele>69.80000305175781</ele><time>2015-08-03T19:09:43.000Z</time></trkpt><trkpt lon="2.317672334611416" lat="48.83369584567845"><ele>70.0</ele><time>2015-08-03T19:09:50.000Z</time></trkpt><trkpt lon="2.3174224700778723" lat="48.83361428976059"><ele>69.80000305175781</ele><time>2015-08-03T19:09:57.000Z</time></trkpt><trkpt lon="2.3172239866107702" lat="48.83346618153155"><ele>69.5999984741211</ele><time>2015-08-03T19:10:04.000Z</time></trkpt><trkpt lon="2.3171384911984205" lat="48.833390325307846"><ele>69.4000015258789</ele><time>2015-08-03T19:10:09.000Z</time></trkpt><trkpt lon="2.3169470485299826" lat="48.83326015435159"><ele>69.0</ele><time>2015-08-03T19:10:15.000Z</time></trkpt><trkpt lon="2.316758120432496" lat="48.83311975747347"><ele>68.4000015258789</ele><time>2015-08-03T19:10:21.000Z</time></trkpt><trkpt lon="2.316496269777417" lat="48.83303007110953"><ele>68.19999694824219</ele><time>2015-08-03T19:10:28.000Z</time></trkpt><trkpt lon="2.3162666894495487" lat="48.832899648696184"><ele>68.0</ele><time>2015-08-03T19:10:35.000Z</time></trkpt><trkpt lon="2.3160256259143353" lat="48.832778027281165"><ele>68.0</ele><time>2015-08-03T19:10:43.000Z</time></trkpt><trkpt lon="2.31577274389565" lat="48.83266872726381"><ele>68.0</ele><time>2015-08-03T19:10:51.000Z</time></trkpt><trkpt lon="2.3155625257641077" lat="48.832554649561644"><ele>68.0</ele><time>2015-08-03T19:10:57.000Z</time></trkpt><trkpt lon="2.315335711464286" lat="48.83245088160038"><ele>67.80000305175781</ele><time>2015-08-03T19:11:04.000Z</time></trkpt><trkpt lon="2.3151538241654634" lat="48.832309981808066"><ele>67.80000305175781</ele><time>2015-08-03T19:11:10.000Z</time></trkpt><trkpt lon="2.3149122577160597" lat="48.8321840018034"><ele>67.5999984741211</ele><time>2015-08-03T19:11:17.000Z</time></trkpt><trkpt lon="2.3146805819123983" lat="48.832048047333956"><ele>67.80000305175781</ele><time>2015-08-03T19:11:23.000Z</time></trkpt><trkpt lon="2.3144440446048975" lat="48.83192231878638"><ele>68.0</ele><time>2015-08-03T19:11:30.000Z</time></trkpt><trkpt lon="2.3142069205641747" lat="48.83179415948689"><ele>67.80000305175781</ele><time>2015-08-03T19:11:37.000Z</time></trkpt><trkpt lon="2.313994439318776" lat="48.83167840540409"><ele>67.80000305175781</ele><time>2015-08-03T19:11:43.000Z</time></trkpt><trkpt lon="2.31378891505301" lat="48.831544211134315"><ele>67.5999984741211</ele><time>2015-08-03T19:11:49.000Z</time></trkpt><trkpt lon="2.3135652858763933" lat="48.83143340237439"><ele>67.4000015258789</ele><time>2015-08-03T19:11:56.000Z</time></trkpt><trkpt lon="2.313353894278407" lat="48.83129191584885"><ele>67.19999694824219</ele><time>2015-08-03T19:12:04.000Z</time></trkpt><trkpt lon="2.313082739710808" lat="48.83118789643049"><ele>67.5999984741211</ele><time>2015-08-03T19:12:13.000Z</time></trkpt><trkpt lon="2.312859110534191" lat="48.83111698552966"><ele>68.19999694824219</ele><time>2015-08-03T19:12:19.000Z</time></trkpt><trkpt lon="2.312608575448394" lat="48.831040877848864"><ele>68.5999984741211</ele><time>2015-08-03T19:12:26.000Z</time></trkpt><trkpt lon="2.312370613217354" lat="48.83091506548226"><ele>68.4000015258789</ele><time>2015-08-03T19:12:33.000Z</time></trkpt><trkpt lon="2.312110187485814" lat="48.83081389591098"><ele>67.5999984741211</ele><time>2015-08-03T19:12:40.000Z</time></trkpt><trkpt lon="2.311880858615041" lat="48.830700404942036"><ele>66.80000305175781</ele><time>2015-08-03T19:12:47.000Z</time></trkpt><trkpt lon="2.311707017943263" lat="48.830658411607146"><ele>66.19999694824219</ele><time>2015-08-03T19:12:52.000Z</time></trkpt><trkpt lon="2.311533009633422" lat="48.830512315034866"><ele>65.4000015258789</ele><time>2015-08-03T19:12:58.000Z</time></trkpt><trkpt lon="2.3113287426531315" lat="48.830376947298646"><ele>64.5999984741211</ele><time>2015-08-03T19:13:04.000Z</time></trkpt><trkpt lon="2.311090026050806" lat="48.830263037234545"><ele>63.79999923706055</ele><time>2015-08-03T19:13:11.000Z</time></trkpt><trkpt lon="2.31083320453763" lat="48.83015465922654"><ele>63.0</ele><time>2015-08-03T19:13:19.000Z</time></trkpt><trkpt lon="2.3106554243713617" lat="48.83007159456611"><ele>63.0</ele><time>2015-08-03T19:13:24.000Z</time></trkpt><trkpt lon="2.3104535043239594" lat="48.829945446923375"><ele>63.20000076293945</ele><time>2015-08-03T19:13:31.000Z</time></trkpt><trkpt lon="2.310220655053854" lat="48.82980773225427"><ele>63.400001525878906</ele><time>2015-08-03T19:13:39.000Z</time></trkpt><trkpt lon="2.309965845197439" lat="48.829709244892"><ele>63.79999923706055</ele><time>2015-08-03T19:13:47.000Z</time></trkpt><trkpt lon="2.3097122926265" lat="48.829599022865295"><ele>63.79999923706055</ele><time>2015-08-03T19:13:54.000Z</time></trkpt><trkpt lon="2.3094356898218393" lat="48.82951227016747"><ele>64.0</ele><time>2015-08-03T19:14:02.000Z</time></trkpt><trkpt lon="2.3091743420809507" lat="48.82940883748233"><ele>64.0</ele><time>2015-08-03T19:14:10.000Z</time></trkpt><trkpt lon="2.308910731226206" lat="48.82931864820421"><ele>65.4000015258789</ele><time>2015-08-03T19:14:18.000Z</time></trkpt><trkpt lon="2.3086584359407425" lat="48.8292551971972"><ele>66.80000305175781</ele><time>2015-08-03T19:14:26.000Z</time></trkpt><trkpt lon="2.3084157798439264" lat="48.82914480753243"><ele>68.4000015258789</ele><time>2015-08-03T19:14:34.000Z</time></trkpt><trkpt lon="2.3081898875534534" lat="48.82902754470706"><ele>68.80000305175781</ele><time>2015-08-03T19:14:41.000Z</time></trkpt><trkpt lon="2.3079704493284225" lat="48.82889896631241"><ele>68.19999694824219</ele><time>2015-08-03T19:14:48.000Z</time></trkpt><trkpt lon="2.3077245242893696" lat="48.828786481171846"><ele>67.5999984741211</ele><time>2015-08-03T19:14:56.000Z</time></trkpt><trkpt lon="2.3076220974326134" lat="48.82875203154981"><ele>67.5999984741211</ele><time>2015-08-03T19:14:59.000Z</time></trkpt><trkpt lon="2.307484047487378" lat="48.828716995194554"><ele>67.5999984741211</ele><time>2015-08-03T19:15:03.000Z</time></trkpt><trkpt lon="2.3072362784296274" lat="48.82860199548304"><ele>67.4000015258789</ele><time>2015-08-03T19:15:11.000Z</time></trkpt><trkpt lon="2.3070492781698704" lat="48.8284607604146"><ele>68.0</ele><time>2015-08-03T19:15:18.000Z</time></trkpt><trkpt lon="2.306800000369549" lat="48.828346598893404"><ele>69.0</ele><time>2015-08-03T19:15:26.000Z</time></trkpt><trkpt lon="2.306568995118141" lat="48.828206956386566"><ele>69.80000305175781</ele><time>2015-08-03T19:15:34.000Z</time></trkpt><trkpt lon="2.306325165554881" lat="48.828102853149176"><ele>69.19999694824219</ele><time>2015-08-03T19:15:42.000Z</time></trkpt><trkpt lon="2.3061479721218348" lat="48.827890958637"><ele>69.5999984741211</ele><time>2015-08-03T19:15:48.000Z</time></trkpt><trkpt lon="2.305846307426691" lat="48.82781250402331"><ele>68.80000305175781</ele><time>2015-08-03T19:15:57.000Z</time></trkpt><trkpt lon="2.3057908192276955" lat="48.82778953760862"><ele>68.5999984741211</ele><time>2015-08-03T19:16:00.000Z</time></trkpt><trkpt lon="2.305817725136876" lat="48.82771426811814"><ele>69.19999694824219</ele><time>2015-08-03T19:16:04.000Z</time></trkpt><trkpt lon="2.3058135341852903" lat="48.82756356149912"><ele>69.5999984741211</ele><time>2015-08-03T19:16:13.000Z</time></trkpt><trkpt lon="2.3060141131281853" lat="48.82744235917926"><ele>71.0</ele><time>2015-08-03T19:16:20.000Z</time></trkpt><trkpt lon="2.306236904114485" lat="48.82733289152384"><ele>72.4000015258789</ele><time>2015-08-03T19:16:27.000Z</time></trkpt><trkpt lon="2.3064716812223196" lat="48.82723021320999"><ele>72.80000305175781</ele><time>2015-08-03T19:16:36.000Z</time></trkpt><trkpt lon="2.306751972064376" lat="48.82716793566942"><ele>72.5999984741211</ele><time>2015-08-03T19:16:44.000Z</time></trkpt><trkpt lon="2.307062102481723" lat="48.827142119407654"><ele>72.5999984741211</ele><time>2015-08-03T19:16:52.000Z</time></trkpt><trkpt lon="2.307325294241309" lat="48.82708570919931"><ele>73.4000015258789</ele><time>2015-08-03T19:16:59.000Z</time></trkpt><trkpt lon="2.3076114524155855" lat="48.82702234201133"><ele>73.80000305175781</ele><time>2015-08-03T19:17:08.000Z</time></trkpt><trkpt lon="2.3078818526118994" lat="48.82696459069848"><ele>72.4000015258789</ele><time>2015-08-03T19:17:16.000Z</time></trkpt><trkpt lon="2.308136075735092" lat="48.82684959098697"><ele>70.5999984741211</ele><time>2015-08-03T19:17:24.000Z</time></trkpt><trkpt lon="2.308425335213542" lat="48.826796198263764"><ele>70.0</ele><time>2015-08-03T19:17:31.000Z</time></trkpt><trkpt lon="2.3086893651634455" lat="48.826729813590646"><ele>70.0</ele><time>2015-08-03T19:17:38.000Z</time></trkpt><trkpt lon="2.30899496935308" lat="48.82670056074858"><ele>70.19999694824219</ele><time>2015-08-03T19:17:46.000Z</time></trkpt><trkpt lon="2.3092844802886248" lat="48.826661836355925"><ele>70.4000015258789</ele><time>2015-08-03T19:17:53.000Z</time></trkpt><trkpt lon="2.309567201882601" lat="48.82663610391319"><ele>71.5999984741211</ele><time>2015-08-03T19:18:00.000Z</time></trkpt><trkpt lon="2.309846067801118" lat="48.82660458795726"><ele>72.5999984741211</ele><time>2015-08-03T19:18:07.000Z</time></trkpt><trkpt lon="2.310125855728984" lat="48.826567120850086"><ele>72.5999984741211</ele><time>2015-08-03T19:18:14.000Z</time></trkpt><trkpt lon="2.310400949791074" lat="48.82650719024241"><ele>71.80000305175781</ele><time>2015-08-03T19:18:22.000Z</time></trkpt><trkpt lon="2.310659447684884" lat="48.82641884498298"><ele>70.80000305175781</ele><time>2015-08-03T19:18:30.000Z</time></trkpt><trkpt lon="2.310905624181032" lat="48.826334942132235"><ele>69.4000015258789</ele><time>2015-08-03T19:18:38.000Z</time></trkpt><trkpt lon="2.311178622767329" lat="48.8262571580708"><ele>68.19999694824219</ele><time>2015-08-03T19:18:46.000Z</time></trkpt><trkpt lon="2.3114294931292534" lat="48.82617929019034"><ele>68.19999694824219</ele><time>2015-08-03T19:18:53.000Z</time></trkpt><trkpt lon="2.3117063473910093" lat="48.82614023052156"><ele>68.19999694824219</ele><time>2015-08-03T19:19:00.000Z</time></trkpt><trkpt lon="2.31200834736228" lat="48.8260985724628"><ele>69.5999984741211</ele><time>2015-08-03T19:19:08.000Z</time></trkpt><trkpt lon="2.3122899793088436" lat="48.82606345228851"><ele>71.19999694824219</ele><time>2015-08-03T19:19:15.000Z</time></trkpt><trkpt lon="2.312538670375943" lat="48.825970916077495"><ele>71.4000015258789</ele><time>2015-08-03T19:19:22.000Z</time></trkpt><trkpt lon="2.3125766403973103" lat="48.82595784030855"><ele>71.19999694824219</ele><time>2015-08-03T19:19:23.000Z</time></trkpt><trkpt lon="2.3126828391104937" lat="48.82593546062708"><ele>71.0</ele><time>2015-08-03T19:19:26.000Z</time></trkpt><trkpt lon="2.3129724338650703" lat="48.825870836153626"><ele>70.19999694824219</ele><time>2015-08-03T19:19:34.000Z</time></trkpt><trkpt lon="2.313237302005291" lat="48.82581274956465"><ele>69.80000305175781</ele><time>2015-08-03T19:19:41.000Z</time></trkpt><trkpt lon="2.3134588357061148" lat="48.82568375207484"><ele>69.4000015258789</ele><time>2015-08-03T19:19:49.000Z</time></trkpt><trkpt lon="2.3137124720960855" lat="48.825575122609735"><ele>69.19999694824219</ele><time>2015-08-03T19:19:57.000Z</time></trkpt><trkpt lon="2.314044227823615" lat="48.82557830773294"><ele>69.19999694824219</ele><time>2015-08-03T19:20:05.000Z</time></trkpt><trkpt lon="2.3143250215798616" lat="48.82554788142443"><ele>69.0</ele><time>2015-08-03T19:20:12.000Z</time></trkpt><trkpt lon="2.3145929910242558" lat="48.82548258639872"><ele>69.19999694824219</ele><time>2015-08-03T19:20:19.000Z</time></trkpt><trkpt lon="2.314849980175495" lat="48.825416872277856"><ele>70.0</ele><time>2015-08-03T19:20:27.000Z</time></trkpt><trkpt lon="2.315126582980156" lat="48.82535199634731"><ele>69.5999984741211</ele><time>2015-08-03T19:20:35.000Z</time></trkpt><trkpt lon="2.3154196981340647" lat="48.825321486219764"><ele>69.5999984741211</ele><time>2015-08-03T19:20:42.000Z</time></trkpt><trkpt lon="2.3157028388231993" lat="48.82528284564614"><ele>69.80000305175781</ele><time>2015-08-03T19:20:49.000Z</time></trkpt><trkpt lon="2.315972987562418" lat="48.82519860751927"><ele>69.80000305175781</ele><time>2015-08-03T19:20:57.000Z</time></trkpt><trkpt lon="2.316245986148715" lat="48.82513557560742"><ele>69.4000015258789</ele><time>2015-08-03T19:21:05.000Z</time></trkpt><trkpt lon="2.3165085911750793" lat="48.825062150135636"><ele>69.19999694824219</ele><time>2015-08-03T19:21:13.000Z</time></trkpt><trkpt lon="2.31676759198308" lat="48.82499593310058"><ele>70.4000015258789</ele><time>2015-08-03T19:21:20.000Z</time></trkpt><trkpt lon="2.3170245811343193" lat="48.8249378465116"><ele>71.80000305175781</ele><time>2015-08-03T19:21:28.000Z</time></trkpt><trkpt lon="2.317332699894905" lat="48.82491395808756"><ele>73.5999984741211</ele><time>2015-08-03T19:21:36.000Z</time></trkpt><trkpt lon="2.3176309280097485" lat="48.8248601462692"><ele>75.80000305175781</ele><time>2015-08-03T19:21:44.000Z</time></trkpt><trkpt lon="2.317914739251137" lat="48.824809016659856"><ele>78.0</ele><time>2015-08-03T19:21:52.000Z</time></trkpt><trkpt lon="2.3181770090013742" lat="48.824700973927975"><ele>77.19999694824219</ele><time>2015-08-03T19:22:01.000Z</time></trkpt><trkpt lon="2.318458640947938" lat="48.8246151432395"><ele>76.19999694824219</ele><time>2015-08-03T19:22:09.000Z</time></trkpt><trkpt lon="2.31875142082572" lat="48.82456300780177"><ele>74.5999984741211</ele><time>2015-08-03T19:22:17.000Z</time></trkpt><trkpt lon="2.319039674475789" lat="48.82451690733433"><ele>73.0</ele><time>2015-08-03T19:22:25.000Z</time></trkpt><trkpt lon="2.319309487938881" lat="48.8244750816375"><ele>72.5999984741211</ele><time>2015-08-03T19:22:32.000Z</time></trkpt><trkpt lon="2.319548623636365" lat="48.82441925816238"><ele>72.5999984741211</ele><time>2015-08-03T19:22:40.000Z</time></trkpt><trkpt lon="2.3196948040276766" lat="48.824401488527656"><ele>72.80000305175781</ele><time>2015-08-03T19:22:45.000Z</time></trkpt><trkpt lon="2.319980291649699" lat="48.824387742206454"><ele>73.0</ele><time>2015-08-03T19:22:52.000Z</time></trkpt><trkpt lon="2.320259576663375" lat="48.82430652156472"><ele>74.0</ele><time>2015-08-03T19:23:00.000Z</time></trkpt><trkpt lon="2.3205153085291386" lat="48.82424583658576"><ele>75.0</ele><time>2015-08-03T19:23:08.000Z</time></trkpt><trkpt lon="2.320776740089059" lat="48.8241679687053"><ele>75.4000015258789</ele><time>2015-08-03T19:23:16.000Z</time></trkpt><trkpt lon="2.3210463020950556" lat="48.82405866868794"><ele>74.0</ele><time>2015-08-03T19:23:25.000Z</time></trkpt><trkpt lon="2.321330951526761" lat="48.823990523815155"><ele>72.80000305175781</ele><time>2015-08-03T19:23:33.000Z</time></trkpt><trkpt lon="2.32161333784461" lat="48.823964204639196"><ele>72.5999984741211</ele><time>2015-08-03T19:23:40.000Z</time></trkpt><trkpt lon="2.32186839915812" lat="48.8239018432796"><ele>72.80000305175781</ele><time>2015-08-03T19:23:47.000Z</time></trkpt><trkpt lon="2.322160927578807" lat="48.82385549135506"><ele>73.19999694824219</ele><time>2015-08-03T19:23:55.000Z</time></trkpt><trkpt lon="2.3223967105150223" lat="48.82376345805824"><ele>73.5999984741211</ele><time>2015-08-03T19:24:02.000Z</time></trkpt><trkpt lon="2.3226692900061607" lat="48.823684668168426"><ele>74.19999694824219</ele><time>2015-08-03T19:24:10.000Z</time></trkpt><trkpt lon="2.322965422645211" lat="48.823636304587126"><ele>75.4000015258789</ele><time>2015-08-03T19:24:18.000Z</time></trkpt><trkpt lon="2.3232386726886034" lat="48.82358861155808"><ele>76.5999984741211</ele><time>2015-08-03T19:24:25.000Z</time></trkpt><trkpt lon="2.323516197502613" lat="48.82352993823588"><ele>77.80000305175781</ele><time>2015-08-03T19:24:33.000Z</time></trkpt><trkpt lon="2.3237844184041023" lat="48.82349372841418"><ele>78.80000305175781</ele><time>2015-08-03T19:24:41.000Z</time></trkpt><trkpt lon="2.3240465205162764" lat="48.823420302942395"><ele>79.4000015258789</ele><time>2015-08-03T19:24:49.000Z</time></trkpt><trkpt lon="2.3242717422544956" lat="48.823300106450915"><ele>78.19999694824219</ele><time>2015-08-03T19:24:57.000Z</time></trkpt><trkpt lon="2.324519259855151" lat="48.82321318611503"><ele>77.0</ele><time>2015-08-03T19:25:05.000Z</time></trkpt><trkpt lon="2.324794353917241" lat="48.8231557700783"><ele>75.4000015258789</ele><time>2015-08-03T19:25:13.000Z</time></trkpt><trkpt lon="2.3250451404601336" lat="48.82302953861654"><ele>73.80000305175781</ele><time>2015-08-03T19:25:22.000Z</time></trkpt><trkpt lon="2.3250928334891796" lat="48.8230452965945"><ele>74.0</ele><time>2015-08-03T19:25:25.000Z</time></trkpt><trkpt lon="2.3250878881663084" lat="48.82305175065994"><ele>74.0</ele><time>2015-08-03T19:25:27.000Z</time></trkpt><trkpt lon="2.325121834874153" lat="48.82309106178582"><ele>74.19999694824219</ele><time>2015-08-03T19:26:21.000Z</time></trkpt><trkpt lon="2.325117224827409" lat="48.823105562478304"><ele>74.4000015258789</ele><time>2015-08-03T19:26:22.000Z</time></trkpt><trkpt lon="2.3251900635659695" lat="48.82320807315409"><ele>75.0</ele><time>2015-08-03T19:26:27.000Z</time></trkpt><trkpt lon="2.325236164033413" lat="48.82326959632337"><ele>75.19999694824219</ele><time>2015-08-03T19:26:30.000Z</time></trkpt><trkpt lon="2.3252577893435955" lat="48.82329247891903"><ele>75.4000015258789</ele><time>2015-08-03T19:26:31.000Z</time></trkpt><trkpt lon="2.3254041373729706" lat="48.82345508784056"><ele>76.4000015258789</ele><time>2015-08-03T19:26:38.000Z</time></trkpt><trkpt lon="2.3255113419145346" lat="48.8236378133297"><ele>76.80000305175781</ele><time>2015-08-03T19:26:47.000Z</time></trkpt><trkpt lon="2.325672609731555" lat="48.823815090581775"><ele>76.4000015258789</ele><time>2015-08-03T19:26:56.000Z</time></trkpt><trkpt lon="2.3257905431091785" lat="48.82399412803352"><ele>76.0</ele><time>2015-08-03T19:27:04.000Z</time></trkpt><trkpt lon="2.3258705902844667" lat="48.82418020628393"><ele>75.4000015258789</ele><time>2015-08-03T19:27:10.000Z</time></trkpt><trkpt lon="2.3258915450423956" lat="48.82420811802149"><ele>75.19999694824219</ele><time>2015-08-03T19:27:11.000Z</time></trkpt><trkpt lon="2.32573832385242" lat="48.82440869696438"><ele>75.0</ele><time>2015-08-03T19:27:17.000Z</time></trkpt><trkpt lon="2.3258411698043346" lat="48.82459804415703"><ele>75.19999694824219</ele><time>2015-08-03T19:27:26.000Z</time></trkpt><trkpt lon="2.3258892819285393" lat="48.824786553159356"><ele>75.19999694824219</ele><time>2015-08-03T19:27:34.000Z</time></trkpt><trkpt lon="2.325977459549904" lat="48.82496466860175"><ele>75.19999694824219</ele><time>2015-08-03T19:27:42.000Z</time></trkpt><trkpt lon="2.3260865081101656" lat="48.82516197860241"><ele>75.19999694824219</ele><time>2015-08-03T19:27:50.000Z</time></trkpt><trkpt lon="2.3261362966150045" lat="48.82534587755799"><ele>75.0</ele><time>2015-08-03T19:27:56.000Z</time></trkpt><trkpt lon="2.3261633701622486" lat="48.82552860304713"><ele>74.80000305175781</ele><time>2015-08-03T19:28:04.000Z</time></trkpt><trkpt lon="2.3261648789048195" lat="48.82554327137768"><ele>74.80000305175781</ele><time>2015-08-03T19:28:05.000Z</time></trkpt><trkpt lon="2.326246602460742" lat="48.825678303837776"><ele>74.4000015258789</ele><time>2015-08-03T19:28:10.000Z</time></trkpt><trkpt lon="2.3263943754136562" lat="48.825871674343944"><ele>73.80000305175781</ele><time>2015-08-03T19:28:15.000Z</time></trkpt><trkpt lon="2.3265388794243336" lat="48.82606018334627"><ele>73.4000015258789</ele><time>2015-08-03T19:28:21.000Z</time></trkpt><trkpt lon="2.3266588244587183" lat="48.82623067125678"><ele>73.4000015258789</ele><time>2015-08-03T19:28:28.000Z</time></trkpt><trkpt lon="2.326711965724826" lat="48.826411133632064"><ele>74.0</ele><time>2015-08-03T19:28:36.000Z</time></trkpt><trkpt lon="2.3267294000834227" lat="48.82660240866244"><ele>74.5999984741211</ele><time>2015-08-03T19:28:44.000Z</time></trkpt><trkpt lon="2.326730489730835" lat="48.826789911836386"><ele>75.0</ele><time>2015-08-03T19:28:51.000Z</time></trkpt><trkpt lon="2.326771141961217" lat="48.82697422988713"><ele>75.0</ele><time>2015-08-03T19:28:57.000Z</time></trkpt><trkpt lon="2.3268841300159693" lat="48.82715821266174"><ele>74.5999984741211</ele><time>2015-08-03T19:29:05.000Z</time></trkpt><trkpt lon="2.3270122054964304" lat="48.82732065394521"><ele>74.4000015258789</ele><time>2015-08-03T19:29:12.000Z</time></trkpt><trkpt lon="2.3267962038517" lat="48.82747504860163"><ele>73.19999694824219</ele><time>2015-08-03T19:29:19.000Z</time></trkpt><trkpt lon="2.32658120803535" lat="48.82756750099361"><ele>72.4000015258789</ele><time>2015-08-03T19:29:25.000Z</time></trkpt><trkpt lon="2.326605934649706" lat="48.827755842357874"><ele>72.0</ele><time>2015-08-03T19:29:33.000Z</time></trkpt><trkpt lon="2.3266151547431946" lat="48.827951811254025"><ele>72.19999694824219</ele><time>2015-08-03T19:29:40.000Z</time></trkpt><trkpt lon="2.3266428150236607" lat="48.828026577830315"><ele>72.4000015258789</ele><time>2015-08-03T19:29:44.000Z</time></trkpt><trkpt lon="2.3266237881034613" lat="48.82810251787305"><ele>72.4000015258789</ele><time>2015-08-03T19:29:48.000Z</time></trkpt><trkpt lon="2.3266089521348476" lat="48.82815046235919"><ele>72.4000015258789</ele><time>2015-08-03T19:29:52.000Z</time></trkpt><trkpt lon="2.3265919368714094" lat="48.828266970813274"><ele>72.5999984741211</ele><time>2015-08-03T19:29:59.000Z</time></trkpt><trkpt lon="2.326682461425662" lat="48.82846620865166"><ele>72.80000305175781</ele><time>2015-08-03T19:30:08.000Z</time></trkpt><trkpt lon="2.326666032895446" lat="48.828661339357495"><ele>73.0</ele><time>2015-08-03T19:30:15.000Z</time></trkpt><trkpt lon="2.326565785333514" lat="48.828839119523764"><ele>73.4000015258789</ele><time>2015-08-03T19:30:22.000Z</time></trkpt><trkpt lon="2.326317261904478" lat="48.82900365628302"><ele>74.0</ele><time>2015-08-03T19:30:26.000Z</time></trkpt><trkpt lon="2.326274933293462" lat="48.829112369567156"><ele>74.0</ele><time>2015-08-03T19:30:35.000Z</time></trkpt><trkpt lon="2.3262403160333633" lat="48.82928419858217"><ele>74.0</ele><time>2015-08-03T19:30:42.000Z</time></trkpt><trkpt lon="2.326194131746888" lat="48.82947564125061"><ele>74.19999694824219</ele><time>2015-08-03T19:30:48.000Z</time></trkpt><trkpt lon="2.3261186946183443" lat="48.829657612368464"><ele>74.4000015258789</ele><time>2015-08-03T19:30:54.000Z</time></trkpt><trkpt lon="2.3260262422263622" lat="48.82983120158315"><ele>74.19999694824219</ele><time>2015-08-03T19:31:00.000Z</time></trkpt><trkpt lon="2.3259734362363815" lat="48.83001459762454"><ele>74.19999694824219</ele><time>2015-08-03T19:31:07.000Z</time></trkpt><trkpt lon="2.3259811475872993" lat="48.830215595662594"><ele>74.19999694824219</ele><time>2015-08-03T19:31:14.000Z</time></trkpt><trkpt lon="2.325929095968604" lat="48.830288015305996"><ele>73.80000305175781</ele><time>2015-08-03T19:31:18.000Z</time></trkpt><trkpt lon="2.325852820649743" lat="48.83039195090532"><ele>73.5999984741211</ele><time>2015-08-03T19:31:24.000Z</time></trkpt><trkpt lon="2.3255859408527613" lat="48.8305139914155"><ele>72.80000305175781</ele><time>2015-08-03T19:31:30.000Z</time></trkpt><trkpt lon="2.3255660757422447" lat="48.830704260617495"><ele>72.5999984741211</ele><time>2015-08-03T19:31:38.000Z</time></trkpt><trkpt lon="2.325561298057437" lat="48.83089310489595"><ele>72.5999984741211</ele><time>2015-08-03T19:31:45.000Z</time></trkpt><trkpt lon="2.325543276965618" lat="48.83108815178275"><ele>72.5999984741211</ele><time>2015-08-03T19:31:51.000Z</time></trkpt><trkpt lon="2.325419057160616" lat="48.831258388236165"><ele>71.5999984741211</ele><time>2015-08-03T19:31:56.000Z</time></trkpt><trkpt lon="2.325360467657447" lat="48.83145754225552"><ele>70.5999984741211</ele><time>2015-08-03T19:32:03.000Z</time></trkpt><trkpt lon="2.325336914509535" lat="48.83164135739207"><ele>70.4000015258789</ele><time>2015-08-03T19:32:12.000Z</time></trkpt><trkpt lon="2.3252759780734777" lat="48.83182098157704"><ele>70.4000015258789</ele><time>2015-08-03T19:32:19.000Z</time></trkpt><trkpt lon="2.3251479864120483" lat="48.83192407898605"><ele>70.4000015258789</ele><time>2015-08-03T19:32:23.000Z</time></trkpt><trkpt lon="2.325137173756957" lat="48.83195458911359"><ele>70.19999694824219</ele><time>2015-08-03T19:32:24.000Z</time></trkpt><trkpt lon="2.3251025564968586" lat="48.83212113752961"><ele>69.80000305175781</ele><time>2015-08-03T19:32:31.000Z</time></trkpt><trkpt lon="2.325034746900201" lat="48.83230562321842"><ele>70.0</ele><time>2015-08-03T19:32:38.000Z</time></trkpt><trkpt lon="2.3249971959739923" lat="48.83248600177467"><ele>70.0</ele><time>2015-08-03T19:32:46.000Z</time></trkpt><trkpt lon="2.324696872383356" lat="48.83262539282441"><ele>71.0</ele><time>2015-08-03T19:32:49.000Z</time></trkpt><trkpt lon="2.3246145620942116" lat="48.83280325680971"><ele>71.0</ele><time>2015-08-03T19:32:57.000Z</time></trkpt><trkpt lon="2.324506687000394" lat="48.832973912358284"><ele>71.4000015258789</ele><time>2015-08-03T19:33:05.000Z</time></trkpt><trkpt lon="2.324426807463169" lat="48.83314775303006"><ele>71.4000015258789</ele><time>2015-08-03T19:33:14.000Z</time></trkpt><trkpt lon="2.3243518732488155" lat="48.83333492092788"><ele>71.19999694824219</ele><time>2015-08-03T19:33:24.000Z</time></trkpt><trkpt lon="2.32431692071259" lat="48.83352058008313"><ele>71.0</ele><time>2015-08-03T19:33:29.000Z</time></trkpt><trkpt lon="2.3242605943232775" lat="48.83369735442102"><ele>70.5999984741211</ele><time>2015-08-03T19:33:38.000Z</time></trkpt><trkpt lon="2.3242317605763674" lat="48.83381797000766"><ele>70.4000015258789</ele><time>2015-08-03T19:33:42.000Z</time></trkpt><trkpt lon="2.324226312339306" lat="48.83400287479162"><ele>70.19999694824219</ele><time>2015-08-03T19:33:53.000Z</time></trkpt><trkpt lon="2.324150875210762" lat="48.83417814038694"><ele>70.19999694824219</ele><time>2015-08-03T19:34:00.000Z</time></trkpt><trkpt lon="2.323965383693576" lat="48.83432817645371"><ele>70.19999694824219</ele><time>2015-08-03T19:34:08.000Z</time></trkpt><trkpt lon="2.3239266593009233" lat="48.834508806467056"><ele>70.5999984741211</ele><time>2015-08-03T19:34:15.000Z</time></trkpt><trkpt lon="2.3239382263273" lat="48.834705613553524"><ele>71.0</ele><time>2015-08-03T19:34:23.000Z</time></trkpt><trkpt lon="2.3239948879927397" lat="48.83488708175719"><ele>71.4000015258789</ele><time>2015-08-03T19:34:31.000Z</time></trkpt><trkpt lon="2.324010729789734" lat="48.8351093698293"><ele>71.80000305175781</ele><time>2015-08-03T19:34:39.000Z</time></trkpt><trkpt lon="2.323946775868535" lat="48.83530559018254"><ele>72.0</ele><time>2015-08-03T19:34:46.000Z</time></trkpt><trkpt lon="2.3238712549209595" lat="48.835325287654996"><ele>72.19999694824219</ele><time>2015-08-03T19:34:49.000Z</time></trkpt><trkpt lon="2.3238530661910772" lat="48.83535026572645"><ele>72.19999694824219</ele><time>2015-08-03T19:34:51.000Z</time></trkpt><trkpt lon="2.323782155290246" lat="48.835500720888376"><ele>72.4000015258789</ele><time>2015-08-03T19:34:59.000Z</time></trkpt><trkpt lon="2.3236803989857435" lat="48.8356876373291"><ele>72.19999694824219</ele><time>2015-08-03T19:35:06.000Z</time></trkpt><trkpt lon="2.323634633794427" lat="48.8358914013952"><ele>71.5999984741211</ele><time>2015-08-03T19:35:13.000Z</time></trkpt><trkpt lon="2.323593646287918" lat="48.83608569391072"><ele>71.0</ele><time>2015-08-03T19:35:19.000Z</time></trkpt><trkpt lon="2.323535308241844" lat="48.83627437055111"><ele>70.4000015258789</ele><time>2015-08-03T19:35:26.000Z</time></trkpt><trkpt lon="2.3234138544648886" lat="48.83645852096379"><ele>70.4000015258789</ele><time>2015-08-03T19:35:34.000Z</time></trkpt><trkpt lon="2.3232929036021233" lat="48.83662573993206"><ele>70.80000305175781</ele><time>2015-08-03T19:35:41.000Z</time></trkpt><trkpt lon="2.3232780676335096" lat="48.836694890633225"><ele>70.80000305175781</ele><time>2015-08-03T19:35:45.000Z</time></trkpt><trkpt lon="2.323210509493947" lat="48.8368552364409"><ele>71.19999694824219</ele><time>2015-08-03T19:35:52.000Z</time></trkpt><trkpt lon="2.32325853779912" lat="48.83704408071935"><ele>71.0</ele><time>2015-08-03T19:36:00.000Z</time></trkpt><trkpt lon="2.323263231664896" lat="48.837139550596476"><ele>70.80000305175781</ele><time>2015-08-03T19:36:04.000Z</time></trkpt><trkpt lon="2.3230112716555595" lat="48.83717852644622"><ele>71.4000015258789</ele><time>2015-08-03T19:36:11.000Z</time></trkpt><trkpt lon="2.3228587210178375" lat="48.83717752061784"><ele>71.80000305175781</ele><time>2015-08-03T19:36:13.000Z</time></trkpt><trkpt lon="2.322767609730363" lat="48.83715162053704"><ele>72.0</ele><time>2015-08-03T19:36:15.000Z</time></trkpt><trkpt lon="2.322508944198489" lat="48.837154721841216"><ele>71.80000305175781</ele><time>2015-08-03T19:36:20.000Z</time></trkpt><trkpt lon="2.3221885040402412" lat="48.837128737941384"><ele>72.19999694824219</ele><time>2015-08-03T19:36:28.000Z</time></trkpt><trkpt lon="2.321920618414879" lat="48.83707811124623"><ele>72.80000305175781</ele><time>2015-08-03T19:36:36.000Z</time></trkpt><trkpt lon="2.3216404113918543" lat="48.8370640296489"><ele>74.0</ele><time>2015-08-03T19:36:47.000Z</time></trkpt><trkpt lon="2.321645775809884" lat="48.83700602687895"><ele>74.0</ele><time>2015-08-03T19:36:51.000Z</time></trkpt><trkpt lon="2.3217248171567917" lat="48.83680611848831"><ele>74.0</ele><time>2015-08-03T19:37:00.000Z</time></trkpt><trkpt lon="2.3219269048422575" lat="48.83668533526361"><ele>73.80000305175781</ele><time>2015-08-03T19:37:11.000Z</time></trkpt><trkpt lon="2.3220390547066927" lat="48.83649481460452"><ele>74.0</ele><time>2015-08-03T19:37:19.000Z</time></trkpt><trkpt lon="2.3220515437424183" lat="48.83647461421788"><ele>74.0</ele><time>2015-08-03T19:37:20.000Z</time></trkpt><trkpt lon="2.3220898490399122" lat="48.83639071136713"><ele>73.80000305175781</ele><time>2015-08-03T19:37:25.000Z</time></trkpt><trkpt lon="2.322103176265955" lat="48.83638392202556"><ele>73.80000305175781</ele><time>2015-08-03T19:37:27.000Z</time></trkpt></trkseg></trk></gpx>';

describe( 'GPX', function(){
  
  describe( 'constructor', function(){
    it( 'should be an object', function(){
      var gpx = new window.gpx( gpxContent );
      expect( gpx ).to.be.an( 'object' );
    });

    it( 'should have gpxContent', function(){
      var gpx = new window.gpx( gpxContent );
      expect( gpx.gpxContent ).to.be.a( 'string' );
    });

    it( 'should have waypoints', function(){
      var gpx = new window.gpx( gpxContent );
      expect( gpx.waypoints ).to.be.an( 'array' );
      expect( gpx.waypoints ).to.have.length( 257 );
    });

    it( 'should return an array when parsing the gpxContent (xmlDoc)', function(){
      var gpx = new window.gpx( gpxContent );
      expect( gpx.createJsonFromGpxDom() ).to.be.an( 'array' );
      expect( gpx.createJsonFromGpxDom() ).to.have.length( 257 );
    });
  });

  describe( 'distance', function(){
    it( 'should have distance', function(){
      var gpx = new window.gpx( gpxContent );
      expect( gpx.distance() ).to.be.a( 'number' );
    });

    it( 'should be 4.87939601482932km', function(){
      var gpx = new window.gpx( gpxContent );
      expect( gpx.distance() ).to.equal( 4.87939601482932 );
    } );
  });

  describe( 'duration', function(){
    it( 'should have duration', function(){
      var gpx = new window.gpx( gpxContent );
      expect( gpx.duration() ).to.be.an( 'object' );
    });

    it( 'should have a start datetime at (UTC) Mon, 03 Aug 2015 19:07:54 GMT', function(){
      var gpx = new window.gpx( gpxContent );
      expect( gpx.duration().start.toUTCString() ).to.equal( 'Mon, 03 Aug 2015 19:07:54 GMT' );
    });

    it( 'should have a end datetime at (UTC) Mon, 03 Aug 2015 19:37:27 GMT', function(){
      var gpx = new window.gpx( gpxContent );
      expect( gpx.duration().end.toUTCString() ).to.equal( 'Mon, 03 Aug 2015 19:37:27 GMT' );
    });

    it( 'should have a total of 29:33', function(){
      var gpx = new window.gpx( gpxContent );
      expect( gpx.duration().total ).to.equal( '29:33' );
    });

  });

  describe( 'elevation', function(){
    it( 'should have elevation', function(){
      var gpx = new window.gpx( gpxContent );
      expect( gpx.elevation() ).to.be.an( 'object' );
    });

    it( 'should have 256 elevation points', function(){
      var gpx = new window.gpx( gpxContent );
      expect( gpx.elevation().elevation ).to.have.length( 256 );
    } );

    it( 'should have elevation gain of 58.4000244140625', function(){
      var gpx = new window.gpx( gpxContent );
      expect( gpx.elevation().gain ).to.equal( 58.4000244140625 );
    } );

    it( 'should have elevation loss of -57.60002136230469', function(){
      var gpx = new window.gpx( gpxContent );
      expect( gpx.elevation().loss ).to.equal( -57.60002136230469 );
    } );

    it( 'should have elevation max of 79.4000015258789', function(){
      var gpx = new window.gpx( gpxContent );
      expect( gpx.elevation().max ).to.equal( 79.4000015258789 );
    } );

    it( 'should have elevation min of 63', function(){
      var gpx = new window.gpx( gpxContent );
      expect( gpx.elevation().min ).to.equal( 63 );
    } );
  });

  describe( 'pace', function(){
    it( 'should have pace', function(){
      var gpx = new window.gpx( gpxContent );
      expect( gpx.pace() ).to.be.an( 'object' );
    });

    it( 'should be 6 minutes', function(){
      var gpx = new window.gpx( gpxContent );
      expect( gpx.pace().minutes ).to.equal( '06' );
    } );

    it( 'should be 3 seconds', function(){
      var gpx = new window.gpx( gpxContent );
      expect( gpx.pace().seconds ).to.equal( '03' );
    } );
  });
});