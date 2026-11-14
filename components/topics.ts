import type { Question } from './types';
export const TOPICS = ['Cloud concepts','Azure architecture and services','Management and governance','Other / unclassified'];
export function topicFor(q: Question): string {
 const s=q.question.toLowerCase();
 if (/cloud computing|cloud model|public cloud|private cloud|hybrid cloud|capex|opex|iaas|paas|saas|scalab|elastic|high availability|disaster recovery|fault tolerance|agility/.test(s)) return TOPICS[0];
 if (/virtual machine|virtual network|vnet|subnet|storage account|blob|file share|azure sql|cosmos|app service|functions|kubernetes|aks|container|load balancer|vpn gateway|expressroute|region|availability zone|resource group|subscription|compute|database|network|dns|cdn/.test(s)) return TOPICS[1];
 if (/cost|pricing|policy|lock|rbac|role|identity|entra|active directory|monitor|advisor|service health|sentinel|security center|defender|compliance|governance|blueprint|tag|budget|sla|trust center|purview|management group|portal|arm template|cloud shell/.test(s)) return TOPICS[2];
 return TOPICS[3];
}
