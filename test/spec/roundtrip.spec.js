import { expect } from 'chai';

import { encode, decode } from '../..';
import types from '../../src/type-tags';

import floats from './floats';
import doubles from './doubles';

let originalData =
  // eslint-disable-next-line
  {"6275973":{"8742854":{"89782004221753":!1,"144127862619":{"63577/6516":!0,"49727/661":!0,"53435/8638":!0,"86643/7321":!1,"66135/938":!0},"21766848545975":{"3310625":[-307671506,-1480355669,-1812529263,-1616584114,258969759],"59866528893843742328650":!1,"924165113392":"[\"657052 814 007311\",\"22011466 69308252 793010\",\"30298733-084-796352\",8404,[\"12499474083/2-226985-748500-711\",\"280\",\"80067857 53925023 166507\"]]"},"6492084560829":323100023,"79203034425453":!0,"4312648548":{"2785090565-174396: 44569 78273;":{"-47-":!1,"-152-":!1,"-725103-":!1,"":!0},"026588-97015: 3952;":{"-11-":!1,"-365-":!1,"-117116-":!0,"":!0},"593987-406164: 423;":{"-80-":!1,"-304-":!1,"-640714-":!0,"":!0},"27946: 303(34152001284);":{"-51-":!1,"-489-":!1,"-761549-":!1,"":!1},"2159008: 730-34;":{"-93-":!1,"-097-":!1,"-615796-":!1,"":!1},"468105: 0645(273);":{"-33-":!1,"-123-":!1,"-151683-":!0,"":!1},"2784-6234: 2409-590102;":{"-36-":!1,"-179-":!1,"-951527-":!1,"":!1},"2661-1464543: 8421 179;":{"-87-":!1,"-861-":!1,"-172081-":!1,"":!1},"4745360: 6547;":{"-47-":!1,"-806-":!1,"-722691-":!1,"":!1},"419366-01474: 9155;":{"-44-":!1,"-128-":!1,"-810318-":!1,"":!1},"5898-852107: 913528-7;":{"-60-":!1,"-730-":!1,"-784940-":!0,"":!1},"9917: 5960;":{"-05-":!1,"-950-":!1,"-867013-":!1,"":!1},"670934-836: 8949586;":{"-07-":!1,"-330-":!1,"-536063-":!1,"":!0},"38674376-137246079: 67068;":{"-91-":!1,"-209-":!1,"-802126-":!1,"":!1},"12044772: 199805;":{"-58-":!1,"-934-":!1,"-294920-":!1,"":!1},"141725: 3267;":{"-57-":!1,"-780-":!1,"-058491-":!1,"":!0},"288-2820: 4;":{"-79-":!1,"-883-":!1,"-938654-":!1,"":!0},"0510-066629: 2.084;":{"-12-":!1,"-775-":!1,"-000314-":!0,"":!1},"6459-380798: 5764;":{"-13-":!1,"-001-":!1,"-852964-":!0,"":!1},"0378-51889: 0160;":{"-39-":!1,"-530-":!1,"-510858-":!1,"":!1}},"0240254817":"365 768 05 1945 16:16:00 432-0700 (215)","819925279":!0,"04563100369":!1,"2079637580321":!1,"57123402895":716763911,"472368003004495598":!0,"7184415139688":{"693276":{"6720167158554":!1,"9253":!0,"116875306":!0,"9166140099423784":!0,"821688629043":!0,"639402519257":!0,"9561807916":!0,"27904157554707":!1,"_0300654":!1,"_10074145_789_43171204":!1,"1016470360282089":!0,"90044679340":!1,"78250123205":!1,"40410406398":!1,"75407003725":!1,"1615783586607":!0,"49727":!0,"02542310":!0,"218861161":!1,"747445":!0,"2153175443228859":!0,"8347337387929":!1,"528576912154":!0,"80844012210457529464":!1,"012892383583326818898210":!1,"7085226":!1,"96923381660":!0,"3842487386397399176":!0,"532771436424358845560":!0,"64367197128974":!0,"0473647":!1,"12864694067389184497430":!0,"230708319463848518866616489":!0},"34784405":{"$459_8254033069813164865347_":!1,"_80548294_513_15971150":!1,"__07629579_789502222":!1,"__061893686_651825_40":!1,"543":!0,"964198693276":!0,"8325696":!0,"1191782028":!0,"632247630578":!1,"02821345743297":!0,"1169278172672822256047":!0,"4789521914924":!1,"817324":!0,"136543":!1,"1295787931012":!0},"473382470163":{"50341178535":!1,"926653775":!1,"474525266":!1,"09522249189893989108":!1,"53691162608217904":!1,"715517123":!1,"95682082252577810679635":!1},"036036653":{"1076411":!0},"59061112":{"926108861":!1}},"98827531713476":{"882479":{"248773996901":4918,"30698101424":626,"7845763226":1459,"55780012668":1417,"1320079642":1459,"9850578":22,"3409126":23,"44636448248":0,"29290451281":0},"316356":{"006771":1440,"74609":2560,"85399239193":1417,"3486788853":2556,"2761165003":24,"8638488446":24},"270771206":{"87360888302":"5604515","8288076":"97221798","4030955634":"5.0 (490930373; 69022 223 63 3 10_11_2) 32205431869/537.36 (45103, 8224 18474) 062364/47.0.2526.111 259127/537.36","28826704":"54385018","6613862":"29195","8629957786":"20030107","711439935":"5929679/5.0 (986883946; 85853 539 92 3 10_11_2) 91654646901/537.36 (16781, 6152 42070) 817278/47.0.2526.111 466206/537.36","213219":"821191 040.","604850173":""}},"3496771126":!0,"3999322641":{"4257":"043652495","4504507":"564680 5946 34497667 \'0\' 85 1104","30592":"604735115: 800731 1772 13987992 \'0\' 17 4560\n    75 575503.3401658.0700502.73725 (2808://7735587.15776/33903/9551:846:5)\n    16 322656.7959123.8835564.58457 (9358://8125080.60469/52682/7646:646:17)\n    88 780912.1973 (0238://1837471.65920/77634/3740:1162:24)\n    29 909965.<001785687> (5742://7022030.03512/72042/6505:840:8)\n    36 6834162 (1042://0641892.41185/89868/9884:17:10)\n    21 5792://2421051.19584/68613/6833:1505:8\n    81 0680://6199375.32163/70915/4083:1506:3"},"14713139188":!1,"8390301672":!0,"962350158146":!1,"710822188300":{"27208/8097":!0,"07325/404":!0,"36391/111":!0,"92920/1464; 117926=\"748, 843029\"":!0,"79584/651; 639637=\"210940\"":!0,"14522/224; 245319=\"5891.426017\"":!0},"4039579665":!0},"68653504":{"76998328446":{"2075197":2,"12459":[!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1]},"4414015828831823529":8,"16618099016188":0},"6817":{"09090222294740":{"6990186":[{"662062442":1,"869244822":1951,"171054":!1,"9973510":!1,"7983781":!1,"57728740":!1,"4147455":1,"321741":{"92":"","8877":"18146712","13674090":"6407","517190":!1,"6522139":"60660"}},{"743325385":1,"502340809":2051,"067684":!1,"3565583":!1,"8981227":!1,"59088922":!1,"9310860":1,"838734":{"12":"","2308":"05624385","50853454":"8108","711144":!1,"6995600":"67839"}},{"528295012":1,"013777372":2084,"574590":!1,"7510986":!1,"0061900":!1,"54283629":!1,"5075061":1,"473315":{"74":"","5453":"35503581","07535757":"5925","524068":!1,"0823297":"67503"}},{"623716239":1,"521576833":2321,"766098":!1,"3947552":!1,"1609596":!1,"29171412":!1,"3798936":9,"263381":{"77":"","6232":"50055383","83525970":"9922","137896":!1,"4722246":"85724"}},{"095155610":1,"230272072":2556,"830761":!1,"7060335":!1,"1685509":!1,"32405547":!1,"6804057":1,"017937":{"03":"","7280":"75753691","27043321":"31467530","520775":!1,"8293752":"73487"}},{"678500901":1,"073555129":2635,"894338":!1,"6732966":!1,"5002402":!1,"21677325":!1,"0887269":1,"657030":{"84":"","5512":"01464318","48049262":"68026975","895640":!1,"2707660":"11817"}},{"148789229":1,"130547232":2668,"304226":!1,"6842409":!1,"4363417":!1,"20399226":!1,"8834901":1,"744600":{"10":"","5037":"59443355","45693313":"38568368","260643":!1,"8448609":"85996"}},{"496179520":1,"990053677":2680,"512570":!1,"8212962":!1,"5393469":!1,"11954481":!1,"4443175":1,"095564":{"88":"","0337":"98560297","19055580":"87135615","230265":!1,"9502116":"35261"}}],"86111":[{"597640803":2,"112115156":2100,"890048":!1,"1295002":!1,"5815837":!1,"22417715":!1,"3023275":1,"329970":{"96":"","2722":"84146993","54955932":"7803","661137":!1,"0901095":"55628"}},{"752298388":2,"661495339":2151,"870959":!1,"3631271":!1,"9940269":!1,"07846848":!1,"9476249":1,"490687":{"67":"","7820":"51053132","31666545":"0979","351074":!1,"9788332":"58766"}},{"933278863":2,"242423791":2185,"638813":!1,"8392234":!1,"8167775":!1,"63089403":!1,"7029861":1,"011491":{"79":"","8866":"66465716","06050523":"6655","033554":!1,"9181871":"06122"}},{"914275273":2,"734803722":2398,"198058":!1,"7201572":!1,"8500075":!1,"81337952":!1,"0459035":9,"326533":{"28":"","0190":"95554249","06182435":"52107170","920200":!1,"8371725":"89184"}},{"768276386":2,"929807944":2702,"200392":!1,"9674516":!1,"5155866":!1,"45406619":!1,"9879772":1,"721804":{"08":"","8550":"10014870","16074822":"36205439","381575":!1,"2321246":"92612"}},{"094949664":2,"387210186":2713,"841905":!1,"3195383":!1,"0307683":!1,"41192162":!1,"5477874":1,"819203":{"19":"","0774":"73340848","26713402":"95338704","211239":!1,"3371620":"74720"}},{"118224707":2,"540346314":2759,"145443":!1,"9903310":!1,"5482428":!1,"99293570":!1,"5789728":1,"662783":{"50":"","1367":"07636371","69555827":"40715653","034333":!1,"8406918":"38628"}},{"267512210":2,"855427385":2792,"011089":!1,"3365029":!1,"9048068":!1,"39635829":!1,"8817350":1,"537902":{"58":"","0024":"43309794","39517335":"17467739","984311":!1,"5954515":"69173"}}],"86364677":[{"217651768":3,"034792023":1951,"702043":!1,"5529925":!1,"7315827":!1,"34473645":!1,"4391548":1,"951644":{"62":"","5348":"47442189","91201025":"8829","923008":!1,"6640971":"87157"}},{"331829703":3,"830008991":2051,"817165":!1,"3385992":!1,"6660537":!1,"61785306":!1,"4629803":1,"745877":{"67":"","4564":"62819065","28176542":"1788","747473":!1,"8748398":"78223"}},{"984153901":3,"621619065":2084,"694459":!1,"5792443":!1,"3932615":!1,"67710304":!1,"6760447":1,"212525":{"28":"","8147":"62924079","91243826":"4660","935351":!1,"9341197":"99004"}},{"575444313":3,"550193545":2556,"377210":!1,"5353485":!1,"8195126":!1,"62054418":!1,"6014802":1,"343483":{"85":"","1889":"03708594","55747943":"07624852","095815":!1,"4783933":"70942"}},{"536841983":3,"087220336":2635,"169789":!1,"8797668":!1,"6117279":!1,"05088588":!1,"8895951":115,"046661":{"72":"","1900":"31490015","37256523":"89312419","375273":!1,"2383773":"82249"}},{"617149534":3,"288445240":2668,"403641":!1,"7099733":!1,"9362475":!1,"90913826":!1,"0644592":1,"413060":{"63":"","7310":"27130886","74342565":"34132896","784333":!1,"9414152":"64381"}},{"026947621":3,"422242638":2680,"833154":!1,"1163056":!1,"4818636":!1,"42316251":!1,"7765549":1,"326882":{"32":"","6377":"50015800","25681496":"76729085","334489":!1,"9531175":"21013"}}]},"28631890327":{"767737475":[{"488479987":1,"626793778":2875,"4":691,"1":377,"522876":0,"987594":{"10":"","1576":"","81696804":"318725","899069":!1,"1343606":"770380"}}],"1692991":[{"925289587":2,"088821953":2953,"6":692,"0":377,"891408":0,"040941":{"29":"","1071":"","77523556":"984605","602822":!1,"3044289":"257975"}}],"5627493621":[{"902970869":3,"861858077":2953,"0":692,"8":377,"518899":0,"981614":{"80":"","2123":"","54786445":"434667","473502":!1,"8716577":"142982"}}],"273713768":[{"633375739":4,"901537928":1944,"1":746,"4":316,"298918":5174,"628490":1352},{"161195856":4,"904760270":2323,"4":742,"8":363,"874867":8038,"812550":1277},{"391918446":4,"297959482":2336,"0":746,"0":366,"012669":9715,"911073":5641},{"194508067":4,"407695334":2358,"6":748,"9":369,"639826":6613,"470799":1934},{"263764069":4,"298995876":2376,"9":752,"7":372,"405015":6017,"851994":1036},{"711470779":4,"557221453":2393,"0":754,"6":374,"983082":1415,"921284":7940},{"297331256":4,"532629345":2459,"0":752,"7":375,"900215":7455,"470269":4439},{"985785425":4,"605344629":2476,"2":746,"4":378,"261722":5553,"098289":2461},{"791490345":4,"684796791":2493,"7":739,"2":381,"060780":5561,"007550":2006},{"745416850":4,"111265588":2510,"4":729,"8":384,"810369":5736,"337401":9038},{"531802472":4,"330130923":2527,"3":724,"6":385,"689900":1510,"225536":2771},{"666363877":4,"397553289":2545,"9":719,"3":385,"703040":6505,"554564":8602},{"201165708":4,"821800395":2562,"6":716,"4":385,"377401":2953,"302798":6362},{"854410472":4,"290531532":2579,"3":711,"7":385,"421043":8891,"755317":2246},{"827444635":4,"326953871":2596,"9":708,"5":384,"794509":5495,"109228":9480},{"552072128":4,"285145183":2614,"9":704,"0":383,"629840":1229,"222383":4011},{"481887557":4,"131577782":2631,"5":699,"9":381,"184404":5541,"571383":7922},{"591274434":4,"107227855":2649,"9":694,"9":379,"419278":1365,"916056":7438},{"615778560":4,"002753028":2667,"1":693,"2":379,"958193":1553,"544877":8325},{"522202554":4,"525280163":2696,"6":693,"9":379,"173232":7564,"161205":5238},{"902296042":4,"071411344":2751,"7":693,"6":378,"279326":8932,"970865":1997},{"908962392":4,"422503353":2769,"9":691,"3":378,"847480":9720,"701212":8611},{"673362231":4,"133620742":2797,"5":691,"1":377,"029628":3935,"886724":5794},{"156491759":4,"000620156":2942,"8":692,"2":377,"897550":9914,"415182":5748}]},"07274104292":{"2003649170":[],"86738987":[],"173969090":[]}}}};

describe('sample payload roundtrips', function () {
  it('should roundtrip 20k payload', function () {
    let encoded = encode(originalData);
    let decoded = decode(encoded);
    expect(originalData).to.eql(decoded);
    expect(JSON.stringify(originalData).length).to.be.equal(JSON.stringify(decoded).length);
  });
});

function showBits(n, width) {
  if (width < 0) return '';
  let bits = n.toString(2);
  width -= bits.length;
  let zeroes = '';
  while (width > 0) {
    zeroes += '0';
    --width;
  }
  return zeroes + bits;
}

function toUint32(a, b, c, d) {
  return (a * Math.pow(2, 24)) + (b << 16) + (c << 8) + d;
}


describe('floating point values', function () {
  describe('single-precision (binary32)', function () {
    floats.forEach(([n, i]) => {
      let actualBits = showBits(i, 32);
      let encoded = encode(n);

      it(`should properly encode ${n} (${actualBits})`, function () {
        expect(encoded[0]).to.be.equal(types.FLOAT32);
        expect(encoded.length).to.be.equal(5);
        let encodedBits = showBits(toUint32(encoded[1], encoded[2], encoded[3], encoded[4]), 32);
        expect(encodedBits).to.be.equal(actualBits);
      });

      let decoded = decode(encoded);
      let doubleEncoded = encode(decoded);
      it(`should round-trip ${n} (${actualBits})`, function () {
        let doubleEncodedBits = showBits(toUint32(doubleEncoded[1], doubleEncoded[2], doubleEncoded[3], doubleEncoded[4]), 32);
        expect(doubleEncodedBits).to.be.equal(actualBits);
        expect(n).to.be.equal(decoded);
      });
    });
  });

  describe('double-precision (binary64)', function () {
    doubles.forEach(([n, high, low]) => {
      let actualBits = showBits(high, 32) + showBits(low, 32);
      let encoded = encode(n);
      if (encoded[0] === types.FLOAT32) return;

      it(`should properly encode ${n} (${actualBits})`, function () {
        expect(encoded[0]).to.be.equal(types.DOUBLE64);
        expect(encoded.length).to.be.equal(9);
        let h = toUint32(encoded[1], encoded[2], encoded[3], encoded[4]);
        let l = toUint32(encoded[5], encoded[6], encoded[7], encoded[8]);
        let encodedBits = `${showBits(h, 32)}${showBits(l, 32)}`;
        expect(encodedBits).to.be.equal(actualBits);
      });

      let decoded = decode(encoded);
      let doubleEncoded = encode(decoded);
      it(`should round-trip ${n} (${actualBits})`, function () {
        let h = toUint32(doubleEncoded[1], doubleEncoded[2], doubleEncoded[3], doubleEncoded[4]);
        let l = toUint32(doubleEncoded[5], doubleEncoded[6], doubleEncoded[7], doubleEncoded[8]);
        let doubleEncodedBits = `${showBits(h, 32)}${showBits(l, 32)}`;
        expect(doubleEncodedBits).to.be.equal(actualBits);
        expect(n).to.be.equal(decoded);
      });
    });
  });
});

describe('omitted keysets', () => {
  it('should roundtrip a nested object with omitted keysets', () => {
    let o = {
      a: 'b',
      c: {
        d: 'e'
      }
    };
    let omitted = [['a', 'c'], ['d']];
    expect(decode(encode(o, { keysetsToOmit: omitted }), { omittedKeysets: omitted })).to.eql(o);
  });

  it('should roundtrip a nested object with a subset omitted keysets', () => {
    let o = {
      a: 'b',
      c: {
        d: 'e'
      }
    };
    let omitted = [['a', 'c']];
    expect(decode(encode(o, { keysetsToOmit: omitted }), { omittedKeysets: omitted })).to.eql(o);
  });

  it('should roundtrip a nested object with a superset omitted keysets', () => {
    let o = {
      a: 'b',
      c: {
        d: 'e'
      }
    };
    let omitted = [['a', 'c'], ['d'], ['f']];
    expect(decode(encode(o, { keysetsToOmit: omitted }), { omittedKeysets: omitted })).to.eql(o);
  });
});
