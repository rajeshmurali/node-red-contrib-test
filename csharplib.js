<!--
  Copyright Rajesh Murali
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
-->
module.exports = function(RED) {
    function CSharplibNode(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        node.on('input', function(msg) {
          node.status({fill:'red', shape:'dot', text:'Fetch the JSON corresponding to URL'});
          node.send(msg);
        });
    }
    RED.nodes.registerType("csharplib",CSharplibNode);
}
