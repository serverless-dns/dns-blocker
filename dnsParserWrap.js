/*
 * Copyright (c) 2021 RethinkDNS and its authors.
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

var DnsParser = require('@serverless-dns/dns-parser')

class DNSParserWrap {
	constructor() {

	}

	async Decode(arrayBuffer) {
		try {
			return DnsParser.decode(Buffer.from(new Uint8Array(arrayBuffer)))
		}
		catch (e) {
			throw e
		}
	}
	Encode(DecodedDnsPacket) {
		try {
			return DnsParser.encode(DecodedDnsPacket);
		}
		catch (e) {
			throw e
		}
	}
}

module.exports.DNSParserWrap = DNSParserWrap